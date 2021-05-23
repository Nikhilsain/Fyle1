# [**Fyle Full Stack Coding Challenge**](https://www.notion.so/Fyle-Full-Stack-Coding-Challenge-db30c5cb91d54de1b330c16f22fc49f0) [Part 1]

## Live Demo [Link](https://flye-backend-avikant.herokuapp.com/)

## API usage
**1) Autocomplete API**
Autocomplete API to return possible matches based on the branch name ordered by IFSC code (ascending order) with limit and offset.

- **Endpoint: /api/branches/autocomplete?q=<>**

- **Example: /api/branches/autocomplete?q=**RTGS**&limit=4&offset=0**

```bash
https://fyle1ans.herokuapp.com/api/branches/autocomplete?q=RTGS&limit=4&offset=0
```

**API Response**
```json
[
{
ifsc: "ABHY0065001",
bank_id: "60",
branch: "RTGS-HO",
address: "ABHYUDAYA BANK BLDG., B.NO.71, NEHRU NAGAR, KURLA (E), MUMBAI-400024",
city: "MUMBAI",
district: "GREATER MUMBAI",
state: "MAHARASHTRA"
},
{
ifsc: "ABNA0000001",
bank_id: "110",
branch: "RTGS-HO",
address: "414 EMPIRE COMPLEX, SENAPATI BAPAT MARG LOWER PAREL WEST MUMBAI 400013",
city: "MUMBAI",
district: "GREATER BOMBAY",
state: "MAHARASHTRA"
},
{
ifsc: "ADCB0000001",
bank_id: "143",
branch: "RTGS-HO",
address: "75, REHMAT MANZIL, V. N. ROAD, CURCHGATE, MUMBAI - 400020",
city: "MUMBAI",
district: "MUMBAI CITY",
state: "MAHARASHTRA"
},
{
ifsc: "ADCC0000001",
bank_id: "61",
branch: "RTGS-HO",
address: "THE AKOLA DISTRICT CENTRAL COOP. BANK LTD., P.B.NO. 8, CIVIL LINES, S.A. COLLEGE ROAD, AKOLA. 444001",
city: "AKOLA",
district: "AKOLA",
state: "MAHARASHTRA"
}
]
```

**2) Search API**

Search API to return possible matches across all columns and all rows, **ordered by IFSC code** (ascending order) with limit and offset.

```bash
https://fyle1ans.herokuapp.com/api/branches?q=Bangalore&limit=4&offset=0
```

-  **Endpoint: /api/branches?q=<>**
-  **Example: /api/branches?q=**Bangalore**&limit=4&offset=0**


**API Response**
```json
[
{
ifsc: "ABNA0100318",
bank_id: "110",
branch: "BANGALORE",
address: "PRESTIGE TOWERS', GROUND FLOOR, 99 & 100, RESIDENCY ROAD, BANGALORE 560 025.",
city: "BANGALORE",
district: "BANGALORE URBAN",
state: "KARNATAKA"
},
{
ifsc: "ADCB0000002",
bank_id: "143",
branch: "BANGALORE",
address: "CITI CENTRE, 28, CHURCH STREET, OFF M. G. ROAD BANGALORE 560001",
city: "BANGALORE",
district: "BANGALORE URBAN",
state: "KARNATAKA"
},
{
ifsc: "ALLA0210217",
bank_id: "11",
branch: "K. G. ROAD",
address: "NO. 2, FKCCI BUILDING , K G ROAD , BANGALORE",
city: "BANGALORE",
district: "BANGALORE URBAN",
state: "KARNATAKA"
},
{
ifsc: "ALLA0210326",
bank_id: "11",
branch: "BANGALORE BASAVANGUDI",
address: "121, RM COMPLEX, DR.D.V.GUNDAPPA ROAD, BASAVANGUDI, BANGALORE - 560004",
city: "BANGALORE",
district: "BANGALORE URBAN",
state: "KARNATAKA"
}
]
```

## Task List
- [X] Setup Node Server
- [X] Setup Credentials in Environment variable
- [X] Setup Database Connection
- [X] Work on API
- [X] API Testing
- [X] Heroku Deployment
