from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Create the database engine

engine = create_engine("sqlite:///test.db")

Base = declarative_base()

SessionLocal = sessionmaker(bind=engine, expire_on_commit=False)
