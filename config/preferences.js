
import util from 'util'

module.exports = Object.freeze({

   mongodb: {
      url_format: "mongodb://%s:%s@%s:%s/?authSource=admin&AuthMechanism=SCRAM-SHA-1",
      url_format_no_auth: 'mongodb://%s:%s',
      host_no_auth: '192.168.3.173',
      host: '192.168.3.173',
      port: '27017',
      db: '2020_DM_DTDC',
      db_usr: 'root',
      db_pwd: 'abc123-',
      usr: "admin",
      pwd: "admin@123"
   },

   mgUrl: util.format(
      "mongodb://%s:%s@%s:%s/?authSource=admin&AuthMechanism=SCRAM-SHA-1",
      encodeURIComponent('root'),
      encodeURIComponent('abc123-'),
      '192.168.3.173',
      '27017'
   ),

   // mgUrl : util.format(
   //    'mongodb://%s:%s',
   //    '192.168.3.173',
   //    '27017'
   // ),

   // redis: {
   //    host: "192.168.10.232",
   //    port: 6379,
   //    auth: "XVs4jOCZ66Axd13nwlEsYAui4ImaB0atckBR3FgKWlS097dRJg9knWS1qWzbgD36t3QuiXLRRY0SroVx"
   // },

   nextcloud: {
      usr: "root",
      pwd: "abc123-",
      url: "http://192.168.3.179:8080",
      host: "http://192.168.3.179:8080/remote.php/webdav",
      iframe: 'http://192.168.3.179:8080/apps/richdocuments/index',
      folder: '/eform',
      filedemo: '1.doc',
   },

   jwt: {
      secret: "abc123-=123",
      iss: "APIServer",
      aud: "AppServer"
   },

   rh: {// restheart
      baseUrl: 'http://192.168.3.173:8088',
      dataUrl: 'http://192.168.3.173:8088/2020_DM_DTDC',
      db: '2020_DM_DTDC',
      tbUsers: 'tbUsers'
   },

   rhgsp: {// restheart
      baseUrl: 'http://192.168.3.173:8088',
      dataUrl: 'http://192.168.3.173:8088/2020_DM_DTDC_NGSP',
      db: '2020_DM_DTDC_NGSP',
      tbUsers: 'tbUsers'
   },

   dmdcqg: {
      url: 'https://api.ngsp.gov.vn',
      url_get_token: 'https://api.ngsp.gov.vn/token',
      url_get_all_category: 'https://api.ngsp.gov.vn/dmdc/1.0/AllCategory',
      consumer_key: 'dfXW2U6gcDPAOvpeyB9Mhrwo_mYa',
      consumer_ecret: 'Y_loZzE9fs931j8xgI3nIhW9srga'
   },

   gmap: {
      url: 'https://maps.googleapis.com/maps/api',
      key: 'AIzaSyD_4MGPHfc4NiGAkDnoJwJyhLDEa98UNWo'
   },

   multer: {
      storage_path: 'media_files/',
      report_path: 'report_files/'
   },

   super: {
      usr: 'su-root',
      pwd: 'su-root',
      roles: 'BIG_DADY'
   }
});