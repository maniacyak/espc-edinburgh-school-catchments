# What?
This bookmarklet adds a small panel to the map view of [ESPC.com](http://www.espc.com)’s search results, which you can use to display catchment area boundaries and school locations for each category of school.

# How?
If you know how to set up a bookmarklet manually, grab the source code from [bookmarklet.js](https://raw.githubusercontent.com/maniacyak/espc-edinburgh-school-catchments/master/bookmarklet.js). 

(Not-so-manual instructions “coming soon” because I can’t embed JavaScript links here.)

# Why?
Because some people like knowing where their kids will end up going to school before they spend enormous sums on a house.

## Acknowledgements
- [Alex Turnbull](https://twitter.com/alexturnbull) for suggesting the idea.
- [The City of Edinburgh Council](https://www.edinburgh.gov.uk)  for publishing their [datasets here on GitHub](https://github.com/edinburghcouncil/datasets)
- [GDAL’s `ogr2ogr` utility](http://www.gdal.org/ogr2ogr.html), which I used to convert Edinburgh Council’s Esri shape files into Google Maps-compatible KML files.
- [Dr Hannah Fry](http://hannahfry.co.uk), whose [Python script](http://hannahfry.co.uk/2012/02/01/converting-british-national-grid-to-latitude-and-longitude-ii/) I used to batch convert Edinburgh Council’s Ordnance Survey (OSGB36) school locations into GPS (WGS84) coordinates.