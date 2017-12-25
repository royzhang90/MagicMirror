/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "lz-magicmirror.royzhang.me", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: [], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "imperial",

	modules: [
		// {
		// 	module: "alert",
		// },
		// {
		// 	module: "updatenotification",
		// 	position: "top_bar"
		// },
		// {
		// 	module: "calendar",
		// 	header: "US Holidays",
		// 	position: "top_left",
		// 	config: {
		// 		calendars: [
		// 			{
		// 				symbol: "calendar-check-o ",
		// 				url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
		// 			}
		// 		]
		// 	}
		// },
		{
			module: "clock",
			position: "top_center"
		},
		{
			module: "helloworld",
			position: "top_center",
			config: {
				text: "Good morning, Lylybell!"
			}
		},
		{
			module: "currentweather",
			position: "top_center",
			config: {
				location: "West Palm Beach",
				locationID: "4177887",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "2b5721e718c8f5d353423fb0f6de7037"
			}
		},
		// {
		// 	module: "weatherforecast",
		// 	position: "top_right",
		// 	header: "Weather Forecast",
		// 	config: {
		// 		location: "West Palm Beach",
		// 		locationID: "4177887",  //ID from http://www.openweathermap.org/help/city_list.txt
		// 		appid: "2b5721e718c8f5d353423fb0f6de7037"
		// 	}
		// },
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		{
			module: "DailyXKCD",
			position: "middle_center",
			config: {
							 invertColors: true,
							 title: true,
							 altText: false
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
