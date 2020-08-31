interface Business {
  location_account: string;
  business_name: string;
  dba_name: string;
  street_address: string;
  city: string;
  zip_code: string;
  location_description: string;
  mailing_address: string;
  mailing_city: string;
  mailing_zip_code: string;
  naics: string;
  primary_naics_description?: string;
  council_district: string;
  location_start_date: string;
  location_end_date: string;
  location_1: string;
}

export default Business;
