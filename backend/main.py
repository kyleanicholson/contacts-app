from fastapi import FastAPI, HTTPException, Depends
from schemas import Contact, UpdateContactRequest
from database import Base, engine, SessionLocal
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
import models
from typing import List


Base.metadata.create_all(bind=engine)


def get_session():
    session = SessionLocal()
    try:
        yield session
    finally:
        session.close()


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Index
@app.get("/")
def root():
    return {"message": "PACC Contact API"}


# Get all contacts
@app.get("/api/v1/contacts/")
def get_all_contacts(session: Session = Depends(get_session)):
    contacts = session.query(models.Contact).all()
    return contacts


# Get all contacts in a service area
@app.get("/api/v1/contacts/service_area/{service_area}")
def get_all_contacts_in_service_area(
    service_area: str, session: Session = Depends(get_session)
):
    contacts = (
        session.query(models.Contact)
        .filter(models.Contact.service_area == service_area)
        .all()
    )
    return contacts


# Get a single contact
@app.get("/api/v1/contacts/{id}")
def get_contact(id: int, session: Session = Depends(get_session)):
    contact = session.query(models.Contact).filter(models.Contact.id == id).first()
    if contact is None:
        raise HTTPException(status_code=404, detail="Contact not found")
    return contact


# Create a new contact
@app.post("/api/v1/contacts/")
def create_contact(contact: Contact, session: Session = Depends(get_session)):
    new_contact = models.Contact(
        name=contact.name,
        email=contact.email,
        phone=contact.phone,
        servicenow_location=contact.servicenow_location,
        service_area=contact.service_area,
    )
    session.add(new_contact)
    session.commit()
    session.refresh(new_contact)
    return new_contact


# Update a contact
@app.put("/api/v1/contacts/{id}", response_model=UpdateContactRequest)
def update_contact(
    id: int,
    contact: UpdateContactRequest,
    session: Session = Depends(get_session),
):
    db_contact = session.query(models.Contact).filter(models.Contact.id == id).first()
    if db_contact is None:
        raise HTTPException(status_code=404, detail="Contact not found")
    if contact.name is not None:
        db_contact.name = contact.name
    if contact.email is not None:
        db_contact.email = contact.email
    if contact.phone is not None:
        db_contact.phone = contact.phone
    if contact.servicenow_location is not None:
        db_contact.servicenow_location = contact.servicenow_location
    if contact.service_area is not None:
        db_contact.service_area = contact.service_area
    session.commit()
    session.refresh(db_contact)
    return db_contact


# Delete a contact


@app.delete("/api/v1/contacts/{id}")
def delete_contact(id: int, session: Session = Depends(get_session)):
    db_contact = session.query(models.Contact).filter(models.Contact.id == id).first()
    if db_contact is None:
        raise HTTPException(status_code=404, detail="Contact not found")
    session.delete(db_contact)
    session.commit()
    return {"message": "Contact deleted"}
