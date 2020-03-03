[[HH-60 Pave Hawk](https://www.helis.com/database/pics/news/2017/mh-60m-pylon.jpg)]

# Lord of War

This API is all about displaying 20 years of arms sales between world powers and the most war-torn countries from 1998 to 2018. The API has data from http://armstrade.sipri.org/ correlated with some nice country data from https://restcountries.eu/

## Requirements

### Steps

1. First I headed to the armstrade.sipri.org site to read through the available data. Originally the data is returned in an RTF format, which is not easily consumable to determine if the data is usable. I found this Github repo (https://gist.github.com/jsvine/9cb3300588ed402160fe) that discussed a way to hit the query GUI from the terminal and pulling the data into a csv. I did an initial pull, adjusted my parameters, widen my search criteria and pulled back sales between sellers = ["USA", "GBR", "NZL", "AUS", "CAN", "FRA"] and buyers = ["AFG", "IRQ", "SOM", "LBY", "SYR", "PAK", "BIH", "GEO"] between 1998 and 2018.

2. Next I hit the https://restcountries.eu API to pull in some country data for the countres involved in the above arms deals.
