# reservations-service
**Reservation - Backend v3**


Reservation API Service written in TypeScript using Express. 

- Allows providers to submit times they are available for appointments ✓
- Allows a client to retrieve a list of available appointment slots ✓
- Allows clients to reserve an available appointment slot ✓
- Allows clients to confirm their reservation ✓

**Todo's**

- Clean up request logic from routes and controllers into models / services
- Add tests to ensure busniess logic is correct (eg. reservation expiration query logic)
- Add middleware Auth, pull user info from (jwt?) token
- Add middleware logging
- Seperate providers / clients out of users into different models?
- Add api documentation
- Add validation when adding multiple openings at the same time by a provider (or do nothing?)
- Improve responses for different controller errors cases
- Add ability to cancel a confirmed reservation
