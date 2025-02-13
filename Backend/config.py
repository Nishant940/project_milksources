SECRET_KEY = "your_secret_key_here"
class Config:
    SQLALCHEMY_DATABASE_URI = "mysql+pymysql://root:yourpassword@localhost/milksources"
    SQLALCHEMY_TRACK_MODIFICATIONS = False

