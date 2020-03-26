# Here's some Documentation about the API

You can get the data from various queries. You can search both Countries and Sales by various search methods.

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
