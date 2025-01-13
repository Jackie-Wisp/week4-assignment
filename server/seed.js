// add SQL Queries to create tables and add dummy data for testing purposes
//

CREATE TABLE IF NOT EXISTS Form (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    guest_name VARCHAR (225),
    hotel_rating INT,
    host_message VARCHAR (225)
  );

  INSERT INTO form (guest_name, hotel_rating, host_message)
VALUES ( 
'Jimmy','3', 'A lovely Hotel'),
( 'John', '1', 'Hated it here'),
  ('Sarah', '5', 'BEST HOTEL EVER');


//Curly braces means importing one item from the server file
import { db } from "./server";


    
