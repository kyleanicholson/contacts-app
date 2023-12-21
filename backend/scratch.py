from enum import Enum

from contact_starter_data import contact_starter_data

# Extract unique servicenow_location values
servicenow_location_values = set(
    contact["servicenow_location"] for contact in contact_starter_data
)

# Extract unique service_area values
service_area_values = set(contact["service_area"] for contact in contact_starter_data)

# Create Enums
ServiceNowLocation = Enum(
    "ServiceNowLocation", {value: value for value in servicenow_location_values}
)
ServiceArea = Enum("ServiceArea", {value: value for value in service_area_values})


print(ServiceNowLocation._member_names_)
print(ServiceArea._member_names_)
