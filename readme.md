# Lord of War

This API is all about displaying 20 years of arms sales between world powers and the most war-torn countries from 1998 to 2018. The API has data from [SIPRI](http://armstrade.sipri.org/) correlated with some nice country data from [this api](https://restcountries.eu/)

## Requirements

### Steps

1. First I headed to the armstrade.sipri.org site to read through the available data. Originally the data is returned in an RTF format, which is not easily consumable to determine if the data is usable. I found [this Github repo](https://gist.github.com/jsvine/9cb3300588ed402160fe) that discussed a way to hit the query GUI from the terminal and pulling the data into a csv. I did an initial pull, adjusted my parameters, widen my search criteria and pulled back sales between `sellers = ["USA", "GBR", "NZL", "AUS", "CAN", "FRA"]` and ```buyers = ["AFG", "IRQ", "SOM", "LBY", "SYR", "PAK", "BIH", "GEO"] ` between 1998 and 2018.

2. Next I hit a [Countries API](https://restcountries.eu) to pull in some country data for the countres involved in the above arms deals. I pulled every country into a single JSON and used that in case I plan on scaling the arms deals dataset to include more than listed above.

3. I built models for both countries and arms deals (regardless of friendly or advesary to US).

4. I did a test seed of data, but will reseed and delete the database, then seed in orders first, then do a second seed with the country data.

5. The product URLs to pull from:

- [Countries](https://lord-of-war-data.herokuapp.com/countries/) - The route for all countries
- [Sales](https://lord-of-war-data.herokuapp.com/sales/) - the route for all sales

### Routes for API use

#### `/sales/weaponCategory/`

- Here you are searching for all sales by the weapon Category. Some examples are `["AC", "AV"]`
- [An example URL](https://lord-of-war-data.herokuapp.com/sales/weaponCategory/AC)

#### `/sales/seller/code/CHN`

- Here you are searching for all sales from a specific country selling the weapons using the `3 digit ISO code` as your selector. You can find the ISO Codes under the countries `alpha3Code`
- [An example URL](https://lord-of-war-data.herokuapp.com/sales/seller/code/CHN)

#### `/sales/buyer/code/IRQ`

- Here you are searching for all sales from the specific country buying the weapons using the `3 digit ISO code` as your selector. You can find the ISO Codes under the countries `alpha3Code`
- [An example URL](https://lord-of-war-data.herokuapp.com/sales/buyer/code/IRQ)

#### `/sales/seller/China`

- Here you are searching for all sales from a specific country using the full name of the country.
- [An example URL](https://lord-of-war-data.herokuapp.com/sales/seller/China)

#### `/sales/buyer/China`

- Here you are searching for all purchases from a specific country using the full name of the country.
- [An example URL](https://lord-of-war-data.herokuapp.com/sales/buyer/China)

#### `/countries/`

- Here you are searching for all countries and returning a `JSON`
- [An example URL](https://lord-of-war-data.herokuapp.com/countries)

#### '/countries/code/USA'

- Here you are searching for data from a specific country using the '3 digit ISO code' as your selector. You can find the ISO Codes under the countries 'alpha3code'
- [An example URL](https://lord-of-war-data.herokuapp.com/countries/code/USA)

#### `/countries/region/Asia`

- Here you are searching for all countries that are from a specific region of the world.
- [An example URL](https://lord-of-war-data.herokuapp.com/countries/region/Asia)
