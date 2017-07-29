First Pentecostal Church of Oakwood
=
### [http://www.fpcoakwood.org](http://www.fpcoakwood.org "First Pentecostal Church's home page") ###  

![alt text](https://github.com/Rich-Hopkins/FPCOakwood-AngularJS/blob/master/FPC.WebApi/assets/images/site-screenshot.png "Site screenshot")

This repo was created to showcase the code used to create the FPCOakwood.org website.  

----------

### Features ###
* Responsive for mobile
* Address of location with link to map
* Contact form that sends message without exposing email address of recipient  
* Upcoming events on Events page, with thumbnails on home page
* Calendar of events (on Events page)
* What we believe
* What we offer
* Hidden pages (not linked from main site) of tools for fireworks sale  
  * Inventory
  * Schedule
  * Cash drawer calculator
  * Nightly report calculator

### Tools Used ###
* AngularJS 1.6.4
* ui.bootstrap
* ASP.NET Web API
  * Contact form sends email without exposing email address of recipient
  * List of events generated to populate Home and Event pages
* Hosted on Azure
* Built in Visual Studio 2017

### Folder Structure ###  
(Some auto-generated and third-party files omitted from this list) 
``` 
FPC.WEBAPI
│
├───App_Data
│       eventdata.txt
│
├───App_Start
│       WebApiConfig.cs
│
├───assets
│   └───images
│
├───Controllers
│       EmailController.cs
│       EventsController.cs
│
├───css
│       app.css
│
├───fonts
│
├───Models
│       Email.cs
│       Event.cs
│
├───scripts
│   │   app.js
│   │
│   ├───directives
│   │       SelectOnClick.js
│   │       ValidateInputValues.js
│   │       ValidateNumber.js
│   │
│   └───services
│           EmailService.js
│           EventsService.js
│
└───views
    ├───about
    │       about.html
    │       AboutController.js
    │
    ├───events
    │       events.html
    │       EventsController.js
    │       fireworks.html
    │       nations-dinner.html
    │       vbs.html
    │
    ├───fireworkscalculator
    │       calculator.html
    │       FireworksCalculatorController.js
    │
    ├───fireworksdrawercount
    │       drawer.html
    │       DrawerController.js
    │
    ├───fireworksinventory
    │       inventory.html
    │       InventoryController.js
    │
    ├───fireworksmenu
    │       FireworksMenuController.js
    │       menu.html
    │
    ├───fireworksschedule
    │       schedule.html
    │       ScheduleController.js
    │
    ├───home
    │       home.html
    │       HomeController.js
    │
    ├───mainmenu
    │       mainmenu.html
    │       MainMenuController.js
    │
    └───offerings
            offerings.html
            OfferingsController.js 
```