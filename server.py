from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import io
import os

# 1. FastAPI 객체 생성 (이게 있어야 uvicorn이 작동합니다!)
app = FastAPI()

# 2. 프론트엔드(Next.js)와 연결 허용 (CORS 설정)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 개발 중에는 모두 허용
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 이미지 저장 폴더 생성 (없으면 만듦)
UPLOAD_DIR = "uploads"
if not os.path.exists(UPLOAD_DIR):
    os.makedirs(UPLOAD_DIR)

@app.get("/")
async def root():
    return {"message": "백엔드 서버가 정상 작동 중입니다!"}

@app.post("/upload")
async def upload_image(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        image = Image.open(io.BytesIO(contents))
        
        # 서버 폴더에 이미지 저장 (나중에 어드민에서 확인용)
        file_path = os.path.join(UPLOAD_DIR, file.filename)
        with open(file_path, "wb") as f:
            f.write(contents)

        print(f"이미지 받음: {file.filename}, 크기: {image.size}")
        return {"message": "업로드 성공!", "filename": file.filename}
    except Exception as e:
        return {"message": f"오류 발생: {str(e)}"}, 500

# 어드민용: 업로드된 이미지 목록 보기
@app.get("/admin/images")
async def get_images():
    files = os.listdir(UPLOAD_DIR)
    return {"images": files}