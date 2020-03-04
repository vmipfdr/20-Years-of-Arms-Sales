[[HH-60 Pave Hawk](https://www.helis.com/database/pics/news/2017/mh-60m-pylon.jpg)]

# Lord of War

This API is all about displaying 20 years of arms sales between world powers and the most war-torn countries from 1998 to 2018. The API has data from http://armstrade.sipri.org/ correlated with some nice country data from https://restcountries.eu/

## Requirements

### Steps

1. First I headed to the armstrade.sipri.org site to read through the available data. Originally the data is returned in an RTF format, which is not easily consumable to determine if the data is usable. I found this Github repo (https://gist.github.com/jsvine/9cb3300588ed402160fe) that discussed a way to hit the query GUI from the terminal and pulling the data into a csv. I did an initial pull, adjusted my parameters, widen my search criteria and pulled back sales between sellers = ["USA", "GBR", "NZL", "AUS", "CAN", "FRA"] and buyers = ["AFG", "IRQ", "SOM", "LBY", "SYR", "PAK", "BIH", "GEO"] between 1998 and 2018.

2. Next I hit the https://restcountries.eu API to pull in some country data for the countres involved in the above arms deals. I pulled every country into a single JSON and used that in case I plan on scaling the arms deals dataset to include more than listed above.

3. I built models for both countries and arms deals (regardless of friendly or advesary to US).

4. I did a test seed of data, but will reseed and delete the database, then seed in orders first, then do a second seed with the country data.

### Technical Requirements

- DONE Be built using Express and Mongoose.
- DONE Have at least one model.
- Have complete CR functionality implemented with RESTful routes. (You may
  logically distribute CR functionality across models, should you decide to implement more than one. This is only allowed
  when it does not make sense in the context of your application to have full
  CR on one model).
- DONE Have its own repository under your GitHub account (do not fork this repo).
- Be deployed to Heroku (we will have a lesson on this later this week). (THIS IS REQUIRED)
- DONE Have good, clean Javascript code. Only include comments for documentation,
  and don't include any non-functional code. Use the auto-formatter regularly!
- DONE Demonstrate a good commit history.
- Have well-documented API routes. You can do this in your Readme, or using
  Swagger or apidoc (see below).

The above are minimum requirements. If you want some extra inspiration, try one
of these ideas:

- [Swagger](https://swagger.io/tools/swagger-inspector/)
  - Swagger is a fantastic tool that helps you build new APIs or document
    existing ones. It plays nicely with node and express.
- [apidoc](https://github.com/apidoc/apidoc)
  - apidoc is a tool that lets you describe existing APIs using inline comments
    in your code and will generate documentation for them.
- [Artillery](https://artillery.io/)
  - Artillery is a load-testing toolkit, which is a lot of fun to use.
- Authentication w/ JSON web tokens
  - Have your server require an auth token to accept requests.
  - http://jasonwatmore.com/post/2018/08/06/nodejs-jwt-authentication-tutorial-with-example-api
