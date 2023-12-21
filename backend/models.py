from sqlalchemy import Column, Integer, String
from database import Base


class Contact(Base):
    __tablename__ = "contacts"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    phone = Column(String)
    servicenow_location = Column(String)
    service_area = Column(String)
