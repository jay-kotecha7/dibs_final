/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },
  // '/user/setupBusiness':'UserController.setupBusiness',   //setting up business
  '/user/getLoc/:id':'UserController.getLoc',  //fetch address of user
  "/user/listOfBusiness/:value": "UserController.listOfBusiness", //list of all clinics or salon
  '/appointment/getAppointments/:id':'AppointmentController.getAppointments', //fetch appointment details of a user 
  //'put /user/setupAssn/:id': 'UserController.setupAssn',
  '/user/getServices/:business_name':'UserController.getServices', //fetch services of a business
  '/user/getServicesByCategory/:business_category':'UserController.getServicesByCategory',  //fetch services of a business_category, eg. clinic's services
  '/role/user/getUsers/:role_id':'RoleController.getUsers', //list of providers or customers
  '/user/getAppointments/:id':'UserController.getAppointments', //user's appointments
  '/user/edit/:id':'UserController.edit',  //user edit view
  '/appointment/setAppointment/': 'AppointmentController.setAppointment',  //booking an apointment
  '/service/addService':'ServiceController.addService', // add an existing service to the user
  '/user/update/:id':'UserController.update',
  '/user/addRole':'UserController.addRole',  //update user's information
  '/user/auth':'UserController.auth',
  '/role/addRole': 'RoleController.addRoles',
  '/user/setupBusiness/:id':'UserController.setupBusiness',
  "/appt/create": "AppointmentController.create",
  "/appt/getAllAppointments": "AppointmentController.getAllAppointments",
  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
