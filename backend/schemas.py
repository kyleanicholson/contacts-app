from typing import Optional
from pydantic import BaseModel
from enum import Enum


class Contact(BaseModel):
    id: Optional[int] = None
    name: str
    email: str
    phone: str
    servicenow_location: str
    service_area: str


class UpdateContactRequest(BaseModel):
    name: Optional[str] = None
    email: Optional[str] = None
    phone: Optional[str] = None
    servicenow_location: Optional[str] = None
    service_area: Optional[str] = None
