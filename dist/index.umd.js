!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("lodash"),require("path-browserify"),require("firebase/compat/app"),require("firebase/compat/auth"),require("firebase/compat/firestore"),require("firebase/compat/storage")):"function"==typeof define&&define.amd?define(["exports","lodash","path-browserify","firebase/compat/app","firebase/compat/auth","firebase/compat/firestore","firebase/compat/storage"],r):r((e||self).reactAdminFirebase={},e.lodash,e.pathBrowserify,e.firebase)}(this,function(e,r,t,n){function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=/*#__PURE__*/o(t),a=/*#__PURE__*/o(n);function s(e,t,n){e.sort(function(e,o){var i=r.get(e,t),a=r.get(o,t),s="asc"===n;return Number.isFinite(i)&&Number.isFinite(a)?u(i,a,s):"string"==typeof i&&"string"==typeof a?u(i.toLowerCase(),a.toLowerCase(),s):i instanceof Date&&a instanceof Date?u(i,a,s):u(!!i,!!a,s)})}function u(e,r,t){return e>r?t?1:-1:e<r?t?-1:1:0}function c(e,t){if(!t||r.isEmpty(t))return e;var n=[];return Object.keys(t).map(function(e){var r=function(e,r){if(!r||"string"==typeof r||"number"==typeof r||"boolean"==typeof r)return[{searchField:e,searchValue:r}];var t={};return t[e]=r,function(e){var r=[];return function e(t,n){for(var o in n=n||"",t)if(t.hasOwnProperty(o)){var i=t&&t[o],a=n?n+"."+o:o;"object"==typeof i||i instanceof Array?e(i,a):r.push({searchField:a,searchValue:i})}}(e,null),r}(t)}(e,t[e]);n.push.apply(n,r)}),e.filter(function(e){return n.reduce(function(t,n){var o=function(e,t,n){var o=r.get(e,t);return!o&&!n||!!o&&("string"==typeof n?o.toString().toLowerCase().includes(n.toLowerCase()):"boolean"==typeof n||"number"==typeof n?o===n:!!Array.isArray(n)&&n.includes(o))}(e,n.searchField,n.searchValue);return o&&t},!0)})}function l(){return l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l.apply(this,arguments)}function f(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var d=function(){return null},h=/*#__PURE__*/function(){function e(e,r){this.title=void 0,this.cacheEnabledKey=void 0,this.title=e,this.cacheEnabledKey=r}var r,t,n=e.prototype;return n.isEnabled=function(){return!!localStorage.getItem(this.cacheEnabledKey)},n.SetEnabled=function(e){e?localStorage.setItem(this.cacheEnabledKey,"true"):localStorage.removeItem(this.cacheEnabledKey)},r=e,(t=[{key:"log",get:function(){return this.isEnabled()?console.log.bind(console,this.title):d}},{key:"warn",get:function(){return this.isEnabled()?console.warn.bind(console,this.title):d}},{key:"error",get:function(){return this.isEnabled()?console.error.bind(console,this.title):d}}])&&function(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(r.prototype,t),Object.defineProperty(r,"prototype",{writable:!1}),e}(),v=new h("🔥raf:","LOGGING_ENABLED"),m=v.log,p=v.error,g=v.warn,P=new h("💸firestore-costs:","LOGGING_FIRESTORE_COSTS_ENABLED"),y="firecosts-single-reads";function b(e,r,t){var n=document.getElementById("eventMonitor");if(n){var o=new CustomEvent(e,{detail:{fileName:r,data:t}});n.dispatchEvent(o)}else m("eventMonitor not found to dispatch event "+e+" for "+r)}var w="___REF_FULLPATH_";function j(e){var r={parsedDoc:{},refdocs:[]};return!e||"object"!=typeof e||(Object.keys(e).map(function(t){e[t]=L(e[t],t,r)}),r.parsedDoc=e),r}function L(e,r,t){if(!e)return e;if("object"!=typeof e)return e;if(e.toDate&&"function"==typeof e.toDate)return e.toDate();if(Array.isArray(e))return e.map(function(e,n){return L(e,r+"."+n,t)});if(R(e)){var n=e;return t.refdocs.push({fieldPath:r,refDocPath:n.path}),n.id}return"object"==typeof e?(Object.keys(e).map(function(r){e[r]=L(e[r],r,t)}),e):e}function R(e){return"string"==typeof e.id&&"object"==typeof e.firestore&&"object"==typeof e.parent&&"string"==typeof e.path}var T=function e(t,n){try{var o,i=function(r){if(o)return r;var i=Array.isArray(n);return i?Promise.all(n.map(function(r,o){try{return Promise.resolve(e(t,r)).then(function(e){n[o]=e})}catch(e){return Promise.reject(e)}})).then(function(){return n}):R(n)?n:i||"object"!=typeof n?void 0:Promise.all(Object.keys(n).map(function(r){try{return Promise.resolve(e(t,n[r])).then(function(e){n[r]=e})}catch(e){return Promise.reject(e)}})).then(function(){return n})};if(!n||"object"!=typeof n)return Promise.resolve(n);var a=r.has(n,"src"),s=function(){if(a)return function(e,r){try{var i=Promise.resolve(t.storage().ref(n.src).getDownloadURL()).then(function(e){return o=1,l({},n,{src:e})})}catch(e){return r(e)}return i&&i.then?i.then(void 0,r):i}(0,function(e){return p("Error when getting download URL",{error:e}),o=1,n})}();return Promise.resolve(s&&s.then?s.then(i):i(s))}catch(e){return Promise.reject(e)}};function D(e){if(!e)return g("parseFireStoreDocument: no doc",{doc:e}),{};var t=j(e.data()),n=function(e,t){return t.map(function(t){r.set(e,w+t.fieldPath,t.refDocPath)}),e}(t.parsedDoc,t.refdocs);return l({id:e.id},n)}function A(e,r){if(!e)return r+"";if(!r)throw new Error("Resource name must be a string of length greater than 0 characters");var t="string"==typeof e?e:e(),n=i.default.join("/",t,"/",r,"/");if((n.split("/").length-1)%2)throw new Error('The rootRef path must point to a "document"\n    not a "collection"e.g. /collection/document/ or\n    /collection/document/collection/document/');return n.slice(1,-1)}function F(){return i.default.join.apply(i.default,[].slice.call(arguments))}function E(e){var r={uploads:[],refdocs:[],parsedDoc:{}};return!e||"object"!=typeof e||(Object.keys(e).map(function(t){G(e[t],t,r)}),r.parsedDoc=e),r}function G(e,r,t){return e?"string"==typeof r&&r.includes(w)?void t.refdocs.push({fieldDotsPath:r,refPath:e}):"object"!=typeof e?e:e.toDate&&"function"==typeof e.toDate?e.toDate():Array.isArray(e)?e.map(function(e,n){return G(e,r+"."+n,t)}):e&&e.hasOwnProperty("rawFile")?(t.uploads.push({fieldDotsPath:r,fieldSlashesPath:r.split(".").join("/"),rawFile:e.rawFile}),void delete e.rawFile):(Object.keys(e).map(function(n){G(e[n],r+"."+n,t)}),e):e}var I=/*#__PURE__*/function(){function e(e,r){this.firestore=void 0,this.app=void 0,this.options=void 0;var t=e||{};this.options=t,this.app=window._app=function(e,r){var t;return r.app?r.app:null!=(t=a.default.apps)&&t.length?a.default.app():a.default.initializeApp(e)}(r,t),this.firestore=this.app.firestore()}var r=e.prototype;return r.dbGetCollection=function(e){return this.firestore.collection(e)},r.dbCreateBatch=function(){return this.firestore.batch()},r.dbMakeNewId=function(){return this.firestore.collection("collections").doc().id},r.OnUserLogout=function(e){this.app.auth().onAuthStateChanged(function(r){var t=!r;m("FirebaseWrapper.OnUserLogout",{user:r,isLoggedOut:t}),t&&e(r)})},r.putFile=function(e,r){var t=this.app.storage().ref(e).put(r),n=new Promise(function(e,r){return t.then(e).catch(r)}),o=n.then(function(e){return e.ref.getDownloadURL()}).then(function(e){return e});return{task:t,taskResult:n,downloadUrl:o}},r.getStorageDownloadUrl=function(e){try{return Promise.resolve(this.app.storage().ref(e).getDownloadURL())}catch(e){return Promise.reject(e)}},r.serverTimestamp=function(){return a.default.firestore.FieldValue.serverTimestamp()},r.authSetPersistence=function(e){try{var r;switch(e){case"local":r=a.default.auth.Auth.Persistence.LOCAL;break;case"none":r=a.default.auth.Auth.Persistence.NONE;break;default:r=a.default.auth.Auth.Persistence.SESSION}return m("setPersistence",{persistenceInput:e,persistenceResolved:r}),Promise.resolve(this.app.auth().setPersistence(r).catch(function(e){return console.error(e)}))}catch(e){return Promise.reject(e)}},r.authSigninEmailPassword=function(e,r){try{return Promise.resolve(this.app.auth().signInWithEmailAndPassword(e,r))}catch(e){return Promise.reject(e)}},r.authSignOut=function(){try{return Promise.resolve(this.app.auth().signOut())}catch(e){return Promise.reject(e)}},r.authGetUserLoggedIn=function(){try{var e=this;return Promise.resolve(new Promise(function(r,t){var n=e.app.auth();if(n.currentUser)return r(n.currentUser);var o=e.app.auth().onAuthStateChanged(function(e){o(),e?r(e):t()})}))}catch(e){return Promise.reject(e)}},r.GetUserLogin=function(){try{return Promise.resolve(this.authGetUserLoggedIn())}catch(e){return Promise.reject(e)}},r.auth=function(){return this.app.auth()},r.storage=function(){return this.app.storage()},r.GetApp=function(){return this.app},r.db=function(){return this.firestore},e}(),S=a.default.storage.TaskState.PAUSED,U=a.default.storage.TaskState.RUNNING,k=a.default.storage.TaskState.CANCELED,C=/*#__PURE__*/function(){function e(e,r,t){var n=this;this.fireWrapper=void 0,this.options=void 0,this.flogger=void 0,this.resources={},this.fireWrapper=e,this.options=r,this.flogger=t,this.fireWrapper.OnUserLogout(function(){n.resources={}})}var r=e.prototype;return r.TryGetResource=function(e,r,t){try{var n=function(){return o.TryGetResourcePromise(e,t)},o=this,i=function(){if(r)return Promise.resolve(o.RefreshResource(e,t)).then(function(){})}();return Promise.resolve(i&&i.then?i.then(n):n())}catch(e){return Promise.reject(e)}},r.GetResource=function(e){var r=this.resources[e];if(!r)throw new Error("react-admin-firebase: Can't find resource: \""+e+'"');return r},r.TryGetResourcePromise=function(e,r){try{var t=this;return m("resourceManager.TryGetResourcePromise",{relativePath:e,collectionQuery:r}),Promise.resolve(t.initPath(e)).then(function(){var r=t.resources[e];if(!r)throw new Error('react-admin-firebase: Cant find resource: "'+e+'"');return r})}catch(e){return Promise.reject(e)}},r.RefreshResource=function(e,r){try{var t,n,o=this;if(null!=(t=o.options)&&null!=(n=t.lazyLoading)&&n.enabled)throw g("resourceManager.RefreshResource",{warn:"RefreshResource is not available in lazy loading mode"}),new Error("react-admin-firebase: RefreshResource is not available in lazy loading mode");return m("resourceManager.RefreshResource",{relativePath:e,collectionQuery:r}),Promise.resolve(o.initPath(e)).then(function(){var t=o.resources[e],n=t.collection,i=o.applyQuery(n,r);return Promise.resolve(i.get()).then(function(e){t.list=e.docs.map(function(e){return D(e)}),o.flogger.logDocument(e.docs.length)(),m("resourceManager.RefreshResource",{newDocs:e,resource:t,collectionPath:n.path})})})}catch(e){return Promise.reject(e)}},r.GetSingleDoc=function(e,r){try{var t=this;return Promise.resolve(t.initPath(e)).then(function(){var n=t.GetResource(e);return t.flogger.logDocument(1)(),Promise.resolve(n.collection.doc(r).get()).then(function(t){if(!t.exists)throw new Error("react-admin-firebase: No id found matching: "+r);var o=D(t);return m("resourceManager.GetSingleDoc",{relativePath:e,resource:n,docId:r,docSnap:t,result:o}),o})})}catch(e){return Promise.reject(e)}},r.initPath=function(e){try{var r=this,t=A(r.options&&r.options.rootRef,e),n=!!r.resources[e];if(m("resourceManager.initPath()",{absolutePath:t,hasBeenInited:n}),n)return m("resourceManager.initPath() has been initialized already..."),Promise.resolve();var o=r.fireWrapper.dbGetCollection(t),i={collection:o,list:[],path:e,pathAbsolute:t};return r.resources[e]=i,m("resourceManager.initPath() setting resource...",{resource:i,allResources:r.resources,collection:o,collectionPath:o.path}),Promise.resolve()}catch(e){return Promise.reject(e)}},r.getUserIdentifier=function(){try{var e=this;return Promise.resolve(e.options.associateUsersById?e.getCurrentUserId():e.getCurrentUserEmail())}catch(e){return Promise.reject(e)}},r.getCurrentUserEmail=function(){try{return Promise.resolve(this.fireWrapper.authGetUserLoggedIn()).then(function(e){return e?e.email:"annonymous user"})}catch(e){return Promise.reject(e)}},r.getCurrentUserId=function(){try{return Promise.resolve(this.fireWrapper.authGetUserLoggedIn()).then(function(e){return e?e.uid:"annonymous user"})}catch(e){return Promise.reject(e)}},r.applyQuery=function(e,r){var t=r?r(e):e;return m("resourceManager.applyQuery() ...",{collection:e,collectionQuery:(r||"-").toString(),collRef:t}),t},e}(),O=/*#__PURE__*/function(){function e(e,r,t){this.fireWrapper=void 0,this.options=void 0,this.flogger=void 0,this.rm=void 0,this.fireWrapper=e,this.options=r,this.flogger=t,this.rm=new C(this.fireWrapper,this.options,this.flogger)}var t=e.prototype;return t.checkRemoveIdField=function(e,r){this.options.dontAddIdFieldToDoc||(e.id=r)},t.transformToDb=function(e,r,t){return"function"==typeof this.options.transformToDb?this.options.transformToDb(e,r,t):r},t.parseDataAndUpload=function(e,t,n){try{var o=this;if(!n)return Promise.resolve(n);var i=e.collection.doc(t).path,a=E(n);return Promise.resolve(Promise.all(a.uploads.map(function(e){try{var t=function(e,r,t,n){var o=e instanceof File?e.name.split("."):[],i=null!=o&&o.length?"."+o.pop():"";return n?F(r,t,e.name):F(r,t+i)}(e.rawFile,i,e.fieldDotsPath,!!o.options.useFileNamesInStorage);return Promise.resolve(o.saveFile(t,e.rawFile)).then(function(t){r.set(n,e.fieldDotsPath+".src",t)})}catch(e){return Promise.reject(e)}}))).then(function(){return n})}catch(e){return Promise.reject(e)}},t.addCreatedByFields=function(e){try{var r=this;return Promise.resolve(function(e,r,t,n){try{return n.disableMeta?Promise.resolve():Promise.resolve(t.getUserIdentifier()).then(function(t){var o=function(e){if(e.renameMetaFields&&e.renameMetaFields.created_at)return e.renameMetaFields.created_at;var r=e.metaFieldCasing,t="createdate";return r?"camel"===r?"createDate":"snake"===r?"create_date":"pascal"===r?"CreateDate":"kebab"===r?"create-date":t:t}(n),i=function(e){if(e.renameMetaFields&&e.renameMetaFields.created_by)return e.renameMetaFields.created_by;var r=e.metaFieldCasing,t="createdby";return r?"camel"===r?"createdBy":"snake"===r?"created_by":"pascal"===r?"CreatedBy":"kebab"===r?"created-by":t:t}(n);e[o]=r.serverTimestamp(),e[i]=t})}catch(e){return Promise.reject(e)}}(e,r.fireWrapper,r.rm,r.options))}catch(e){return Promise.reject(e)}},t.addUpdatedByFields=function(e){try{var r=this;return Promise.resolve(function(e,r,t,n){try{return n.disableMeta?Promise.resolve():Promise.resolve(t.getUserIdentifier()).then(function(t){var o=function(e){if(e.renameMetaFields&&e.renameMetaFields.updated_at)return e.renameMetaFields.updated_at;var r=e.metaFieldCasing,t="lastupdate";return r?"camel"===r?"lastUpdate":"snake"===r?"last_update":"pascal"===r?"LastUpdate":"kebab"===r?"last-update":t:t}(n),i=function(e){if(e.renameMetaFields&&e.renameMetaFields.updated_by)return e.renameMetaFields.updated_by;var r=e.metaFieldCasing,t="updatedby";return r?"camel"===r?"updatedBy":"snake"===r?"updated_by":"pascal"===r?"UpdatedBy":"kebab"===r?"updated-by":t:t}(n);e[o]=r.serverTimestamp(),e[i]=t})}catch(e){return Promise.reject(e)}}(e,r.fireWrapper,r.rm,r.options))}catch(e){return Promise.reject(e)}},t.saveFile=function(e,t){try{var n=this;return m("saveFile() saving file...",{storagePath:e,rawFile:t}),Promise.resolve(function(r,o){try{var i=(s=(a=n.fireWrapper.putFile(e,t)).task,u=a.taskResult,c=a.downloadUrl,b("FILE_UPLOAD_WILL_START",l=t.name),s.on("state_changed",function(e){var r=e.bytesTransferred/e.totalBytes*100;switch(m("Upload is "+r+"% done"),b("FILE_UPLOAD_PROGRESS",l,r),e.state){case S:m("Upload is paused"),b("FILE_UPLOAD_PAUSED",l);break;case U:m("Upload is running"),b("FILE_UPLOAD_RUNNING",l);break;case k:m("Upload has been canceled"),b("FILE_UPLOAD_CANCELED",l)}}),Promise.resolve(Promise.all([c,u])).then(function(r){var t=r[0];return b("FILE_UPLOAD_COMPLETE",l),b("FILE_SAVED",l),m("saveFile() saved file",{storagePath:e,taskResult:u,getDownloadURL:t}),n.options.relativeFilePaths?e:t}))}catch(e){return o(e)}var a,s,u,c,l;return i&&i.then?i.then(void 0,o):i}(0,function(e){"storage/unknown"===r.get(e,"code")?p('saveFile() error saving file, No bucket found! Try clicking "Get Started" in firebase -> storage',{storageError:e}):p("saveFile() error saving file",{storageError:e})}))}catch(e){return Promise.reject(e)}},e}();function N(e,r,t){if(!e.s){if(t instanceof W){if(!t.s)return void(t.o=N.bind(null,e,r));1&r&&(r=t.s),t=t.v}if(t&&t.then)return void t.then(N.bind(null,e,r),N.bind(null,e,2));e.s=r,e.v=t;var n=e.o;n&&n(e)}}var W=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(r,t){var n=new e,o=this.s;if(o){var i=1&o?r:t;if(i){try{N(n,1,i(this.v))}catch(e){N(n,2,e)}return n}return this}return this.o=function(e){try{var o=e.v;1&e.s?N(n,1,r?r(o):o):t?N(n,1,t(o)):N(n,2,o)}catch(e){N(n,2,e)}},n},e}();function M(e){return e instanceof W&&1&e.s}var _=function(e,r,t,n){try{var o=btoa(JSON.stringify(l({},r,{resourceName:t}))),i=localStorage.getItem(o);return i?Promise.resolve(e.doc(i).get()).then(function(e){return n.logDocument(1)(),!!e.exists&&e}):Promise.resolve(!1)}catch(e){return Promise.reject(e)}},H=function(e,r,t,n,o){void 0===o&&(o=J);try{var i=o.filters?(s=e,Object.entries(r.filter).reduce(function(e,r){var t=r[0],n=r[1],o=n&&Array.isArray(n)?"in":"==";return e.where(t,o,n)},s)):e,a=o.sort?function(e,r){if(null!=r&&"id"!==r.field){var t=r.field,n=r.order.toLocaleLowerCase();return e.orderBy(t,n)}return e}(i,r.sort):i;return Promise.resolve(o.pagination?function(e,r,t,n,o){try{var i=r.pagination,a=i.page,s=i.perPage,u=function(){if(1!==a)return Promise.resolve(_(t,r,n,o)).then(function(i){function a(){e=e.startAfter(i).limit(s)}var u=function(){if(!i)return Promise.resolve(function(e,r,t,n,o){try{var i=function(){var e=(s-f)*u,t=1===f?r.limit(e):r.startAt(c).limit(e);return Promise.resolve(t.get()).then(function(e){var r=e.docs.length;return o.logDocument(r)(),e.docs[r-1]})},a=t.pagination,s=a.page,u=a.perPage,c=!1,f=s-1,d=l({},t,{pagination:l({},t.pagination)}),h=function(e,r,t){for(var n;;){var o=e();if(M(o)&&(o=o.v),!o)return i;if(o.then){n=0;break}var i=t();if(i&&i.then){if(!M(i)){n=1;break}i=i.s}}var a=new W,s=N.bind(null,a,2);return(0===n?o.then(c):1===n?i.then(u):(void 0).then(function(){(o=e())?o.then?o.then(c).then(void 0,s):c(o):N(a,1,i)})).then(void 0,s),a;function u(r){i=r;do{if(!(o=e())||M(o)&&!o.v)return void N(a,1,i);if(o.then)return void o.then(c).then(void 0,s);M(i=t())&&(i=i.v)}while(!i||!i.then);i.then(u).then(void 0,s)}function c(e){e?(i=t())&&i.then?i.then(u).then(void 0,s):u(i):N(a,1,i)}}(function(){return!c&&f>1},0,function(){return f--,d.pagination.page=f,console.log("getting query cursor currentPage=",f),Promise.resolve(_(e,d,n,o)).then(function(e){c=e})});return Promise.resolve(h&&h.then?h.then(i):i())}catch(e){return Promise.reject(e)}}(t,e,r,n,o)).then(function(e){i=e})}();return u&&u.then?u.then(a):a()});e=e.limit(s)}();return Promise.resolve(u&&u.then?u.then(function(){return e}):e)}catch(e){return Promise.reject(e)}}(a,r,e,t,n):a)}catch(e){return Promise.reject(e)}var s},J={filters:!0,sort:!0,pagination:!0};function B(e,r){return l({},e,{filter:r?l({deleted:!1},e.filter):e.filter})}function x(e,r,t){if(!e.s){if(t instanceof z){if(!t.s)return void(t.o=x.bind(null,e,r));1&r&&(r=t.s),t=t.v}if(t&&t.then)return void t.then(x.bind(null,e,r),x.bind(null,e,2));e.s=r,e.v=t;var n=e.o;n&&n(e)}}var z=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(r,t){var n=new e,o=this.s;if(o){var i=1&o?r:t;if(i){try{x(n,1,i(this.v))}catch(e){x(n,2,e)}return n}return this}return this.o=function(e){try{var o=e.v;1&e.s?x(n,1,r?r(o):o):t?x(n,1,t(o)):x(n,2,o)}catch(e){x(n,2,e)}},n},e}();function Q(e,r,t){var n=[];for(var o in e)n.push(o);return function(e,r,t){var n,o,i=-1;return function a(s){try{for(;++i<e.length&&(!t||!t());)if((s=r(i))&&s.then){if(!((u=s)instanceof z&&1&u.s))return void s.then(a,o||(o=x.bind(null,n=new z,2)));s=s.v}n?x(n,1,s):n=s}catch(e){x(n||(n=new z),2,e)}var u}(),n}(n,function(e){return r(n[e])},t)}var q=/*#__PURE__*/function(){function e(e,r,t){this.options=void 0,this.rm=void 0,this.client=void 0,this.options=e,this.rm=r,this.client=t}var r=e.prototype;return r.apiGetList=function(e,r){try{var t=this;return Promise.resolve(t.tryGetResource(e)).then(function(n){var o=B(r,!!t.options.softDelete);return m("apiGetListLazy",{resourceName:e,params:o}),Promise.resolve(H(n.collection,o,e,t.client.flogger)).then(function(r){return Promise.resolve(r.get()).then(function(r){var i=r.docs.length;if(!i)return m("apiGetListLazy",{message:"There are not records for given query"}),{data:[],total:0};t.client.flogger.logDocument(i)();var a=r.docs.map(function(e){return D(e)}),s=r.docs[r.docs.length-1];!function(e,r,t){var n=btoa(JSON.stringify(l({},r,{resourceName:t})));localStorage.setItem(n,e.id);var o="ra-firebase-cursor-keys_"+t,i=localStorage.getItem(o);if(i){var a=JSON.parse(i).concat(n);localStorage.setItem(o,JSON.stringify(a))}else localStorage.setItem(o,JSON.stringify([n]))}(s,function(e){return l({},e,{pagination:l({},e.pagination,{page:e.pagination.page+1})})}(o),e);var u=9e3;return Promise.resolve(t.checkIfOnLastPage(n.collection,o,e,s)).then(function(e){var r;function i(e){return r?e:(m("apiGetListLazy result",{docs:a,resource:n,collectionPath:n.collection.path}),{data:a,total:u})}if(e){var s=o.pagination;u=(s.page-1)*s.perPage+a.length,m("apiGetListLazy",{message:"It's last page of collection."})}var c=function(){if(t.options.relativeFilePaths)return Promise.resolve(Promise.all(a.map(function(e){try{var r=Q(e,function(r){return Promise.resolve(T(t.client.fireWrapper,e[r])).then(function(t){e[r]=t})});return Promise.resolve(r&&r.then?r.then(function(){return e}):e)}catch(e){return Promise.reject(e)}}))).then(function(e){return m("apiGetListLazy result",{docs:e,resource:n,collectionPath:n.collection.path}),r=1,{data:e,total:u}})}();return c&&c.then?c.then(i):i(c)})})})})}catch(e){return Promise.reject(e)}},r.apiGetManyReference=function(e,r){try{var t=this;return Promise.resolve(t.tryGetResource(e)).then(function(n){var o;m("apiGetManyReferenceLazy",{resourceName:e,resource:n,reactAdminParams:r});var i=l({},r.filter,((o={})[r.target]=r.id,o)),a=B(l({},r,{filter:i}),!!t.options.softDelete);return Promise.resolve(H(n.collection,a,e,t.client.flogger)).then(function(e){return Promise.resolve(e.get()).then(function(e){var r;function o(e){return r?e:(m("apiGetManyReferenceLazy result",{docs:i,resource:n,collectionPath:n.collection.path}),{data:i,total:i.length})}t.client.flogger.logDocument(e.docs.length)();var i=e.docs.map(function(e){return D(e)}),a=function(){if(t.options.relativeFilePaths)return Promise.resolve(Promise.all(i.map(function(e){try{var r=Q(e,function(r){return Promise.resolve(T(t.client.fireWrapper,e[r])).then(function(t){e[r]=t})});return Promise.resolve(r&&r.then?r.then(function(){return e}):e)}catch(e){return Promise.reject(e)}}))).then(function(e){return m("apiGetManyReferenceLazy result",{docs:e,resource:n,collectionPath:n.collection.path}),r=1,{data:e,total:i.length}})}();return a&&a.then?a.then(o):o(a)})})})}catch(e){return Promise.reject(e)}},r.checkIfOnLastPage=function(e,r,t,n){try{return Promise.resolve(H(e,r,t,this.client.flogger,{filters:!0,sort:!0})).then(function(e){if(!n)throw new Error("Page cursor was empty...");return Promise.resolve(e.startAfter(n).limit(1).get()).then(function(e){return e.empty})})}catch(e){return Promise.reject(e)}},r.clearQueryCursors=function(e){!function(e){var r="ra-firebase-cursor-keys_"+e,t=localStorage.getItem(r);t&&(JSON.parse(t).forEach(function(e){return localStorage.removeItem(e)}),localStorage.removeItem(r))}(e)},r.tryGetResource=function(e,r){try{return Promise.resolve(this.rm.TryGetResourcePromise(e,r))}catch(e){return Promise.reject(e)}},e}();function K(e,r){try{var t=e()}catch(e){return r(e)}return t&&t.then?t.then(void 0,r):t}var V=/*#__PURE__*/function(){function e(e,r){this.fireWrapper=void 0;var t=r||{};m("Auth Client: initializing...",{firebaseConfig:e,options:t}),this.fireWrapper=new I(t,e),t.persistence&&this.setPersistence(t.persistence)}var r=e.prototype;return r.setPersistence=function(e){return this.fireWrapper.authSetPersistence(e)},r.HandleAuthLogin=function(e){try{var r=this,t=e.username,n=e.password;return Promise.resolve(t&&n?K(function(){return Promise.resolve(r.fireWrapper.authSigninEmailPassword(t,n)).then(function(e){return m("HandleAuthLogin: user sucessfully logged in",{user:e}),e})},function(){throw m("HandleAuthLogin: invalid credentials",{params:e}),new Error("Login error: invalid credentials")}):r.getUserLogin())}catch(e){return Promise.reject(e)}},r.HandleAuthLogout=function(){return this.fireWrapper.authSignOut()},r.HandleAuthError=function(e){return m("HandleAuthLogin: invalid credentials",{errorHttp:e}),"ok"===function(e){if(e>=200&&e<300)return"ok";switch(e){case 401:case 403:return"unauthenticated";default:return"ok"}}(!!e&&e.status)?(m("API is actually authenticated"),Promise.resolve()):(g("Received authentication error from API"),Promise.reject())},r.HandleAuthCheck=function(){try{return Promise.resolve(this.getUserLogin())}catch(e){return Promise.reject(e)}},r.getUserLogin=function(){return this.fireWrapper.authGetUserLoggedIn()},r.HandleGetPermissions=function(){try{var e=this;return Promise.resolve(K(function(){return Promise.resolve(e.getUserLogin()).then(function(e){return Promise.resolve(e.getIdTokenResult()).then(function(e){return e.claims})})},function(e){return m("HandleGetPermission: no user is logged in or tokenResult error",{e:e}),null}))}catch(e){return Promise.reject(e)}},r.HandleGetIdentity=function(){try{var e=this;return Promise.resolve(K(function(){return Promise.resolve(e.getUserLogin()).then(function(e){var r=e.displayName,t=e.photoURL;return{id:e.uid,fullName:""+(null!=r?r:""),avatar:""+(null!=t?t:"")}})},function(e){return m("HandleGetIdentity: no user is logged in",{e:e}),null}))}catch(e){return Promise.reject(e)}},r.HandleGetJWTAuthTime=function(){try{var e=this;return Promise.resolve(K(function(){return Promise.resolve(e.getUserLogin()).then(function(e){return Promise.resolve(e.getIdTokenResult()).then(function(e){return e.authTime})})},function(e){return m("HandleGetJWTAuthTime: no user is logged in or tokenResult error",{e:e}),null}))}catch(e){return Promise.reject(e)}},r.HandleGetJWTExpirationTime=function(){try{var e=this;return Promise.resolve(K(function(){return Promise.resolve(e.getUserLogin()).then(function(e){return Promise.resolve(e.getIdTokenResult()).then(function(e){return e.expirationTime})})},function(e){return m("HandleGetJWTExpirationTime: no user is logged in or tokenResult error",{e:e}),null}))}catch(e){return Promise.reject(e)}},r.HandleGetJWTSignInProvider=function(){try{var e=this;return Promise.resolve(K(function(){return Promise.resolve(e.getUserLogin()).then(function(e){return Promise.resolve(e.getIdTokenResult()).then(function(e){return e.signInProvider})})},function(e){return m("HandleGetJWTSignInProvider: no user is logged in or tokenResult error",{e:e}),null}))}catch(e){return Promise.reject(e)}},r.HandleGetJWTIssuedAtTime=function(){try{var e=this;return Promise.resolve(K(function(){return Promise.resolve(e.getUserLogin()).then(function(e){return Promise.resolve(e.getIdTokenResult()).then(function(e){return e.issuedAtTime})})},function(e){return m("HandleGetJWTIssuedAtTime: no user is logged in or tokenResult error",{e:e}),null}))}catch(e){return Promise.reject(e)}},r.HandleGetJWTToken=function(){try{var e=this;return Promise.resolve(K(function(){return Promise.resolve(e.getUserLogin()).then(function(e){return Promise.resolve(e.getIdTokenResult()).then(function(e){return e.token})})},function(e){return m("HandleGetJWTToken: no user is logged in or tokenResult error",{e:e}),null}))}catch(e){return Promise.reject(e)}},e}();e.FirebaseAuthProvider=function(e,r){!function(e,r){if(!(e||r&&r.app))throw new Error("Please pass the Firebase firebaseConfig object or options.app to the FirebaseAuthProvider")}(e,r),v.SetEnabled(!(null==r||!r.logging));var t=new V(e,r);return{login:function(e){return t.HandleAuthLogin(e)},logout:function(){return t.HandleAuthLogout()},checkAuth:function(){return t.HandleAuthCheck()},checkError:function(e){return t.HandleAuthError(e)},getPermissions:function(){return t.HandleGetPermissions()},getIdentity:function(){return t.HandleGetIdentity()},getAuthUser:function(){return t.getUserLogin()},getJWTAuthTime:function(){return t.HandleGetJWTAuthTime()},getJWTExpirationTime:function(){return t.HandleGetJWTExpirationTime()},getJWTSignInProvider:function(){return t.HandleGetJWTSignInProvider()},getJWTClaims:function(){return t.HandleGetPermissions()},getJWTToken:function(){return t.HandleGetJWTToken()}}},e.FirebaseDataProvider=function(e,r){var t,n,o=function(e){try{var r;return Promise.resolve(function(t,n){try{var o=Promise.resolve(e()).then(function(e){return r=e})}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){var t=(e||"").toString(),n=function(e){var r=/\[code\=([\w-]*)/g.exec(e),t=Array.isArray(r)&&r[1];switch(t||p("unknown StatusCode ",{statusTxt:e}),t){case"unauthenticated":return 401;case"permission-denied":return 403;case"internal":return 0;case"invalid-argument":return 400;case"not-found":return 404;case"aborted":return 409;case"resource-exhausted":return 429;case"cancelled":return 499;case"internal":return 500;case"unimplemented":return 501;case"unavailable":return 503;case"deadline-exceeded":return 504;default:return 200}}(t),o={status:n,message:t,json:r};throw p("DataProvider:",e,{errorMsg:t,code:n,errorObj:o}),o}))}catch(e){return Promise.reject(e)}},i=r||{};!function(e,r){if(!(e||r&&r.app))throw new Error("Please pass the Firebase firebaseConfig object or options.app to the FirebaseAuthProvider");r&&r.rootRef&&A(r.rootRef,"test")}(e,i);var a=function(e){return{SetEnabled:function(e){P.SetEnabled(e)},ResetCount:function(e){e&&localStorage.removeItem(y)},logDocument:function(r){if(null==e||null==(t=e.lazyLoading)||!t.enabled)return d;var t,n=function(e){void 0===e&&(e=1);var r=localStorage.getItem(y)||"",t=(parseInt(r)||0)+e;return localStorage.setItem(y,t+""),t}(r);return P.log.bind(console,"+"+r+" (session total="+n+" documents read)")}}}(i);v.SetEnabled(!(null==i||!i.logging)),a.SetEnabled(!(null==i||null==(t=i.firestoreCostsLogger)||!t.enabled)),a.ResetCount(!(null!=i&&null!=(n=i.firestoreCostsLogger)&&n.persistCount)),m("Creating FirebaseDataProvider",{firebaseConfig:e,options:i});var u=new I(r,e),h=new O(u,i,a),g={app:u.GetApp(),getList:function(e,r){return o(function(){return function(e,r,t){try{var n;m("GetList",{resourceName:e,params:r});var o=t.rm,i=t.fireWrapper,a=t.options;if(null!=a&&null!=(n=a.lazyLoading)&&n.enabled){var u=new q(a,o,t);return Promise.resolve(u.apiGetList(e,r))}var l=r.filter||{},f=l.collectionQuery;return delete l.collectionQuery,Promise.resolve(o.TryGetResource(e,"REFRESH",f)).then(function(e){var t;function n(e){return t?e:{data:v,total:m}}var o=e.list;if(null!=r.sort){var u=r.sort;s(o,u.field,"ASC"===u.order?"asc":"desc")}var f=o;a.softDelete&&!Object.keys(l).includes("deleted")&&(f=o.filter(function(e){return!e.deleted}));var d=c(f,l),h=(r.pagination.page-1)*r.pagination.perPage,v=d.slice(h,h+r.pagination.perPage),m=d.length,p=function(){if(a.relativeFilePaths)return Promise.resolve(Promise.all(v.map(function(e){return T(i,e)}))).then(function(e){return t=1,{data:e,total:m}})}();return p&&p.then?p.then(n):n(p)})}catch(e){return Promise.reject(e)}}(e,r,h)})},getOne:function(e,r){return o(function(){return function(e,r,t){try{m("GetOne",{resourceName:e,params:r});var n=t.rm;return Promise.resolve(function(o,i){try{var a=Promise.resolve(n.GetSingleDoc(e,r.id+"")).then(function(e){return t.flogger.logDocument(1)(),{data:e}})}catch(e){return i()}return a&&a.then?a.then(void 0,i):a}(0,function(){throw new Error("Error getting id: "+r.id+" from collection: "+e)}))}catch(e){return Promise.reject(e)}}(e,r,h)})},getMany:function(e,r){return o(function(){return function(e,r,t){try{var n=t.options,o=t.fireWrapper;return Promise.resolve(t.rm.TryGetResource(e)).then(function(i){var a=r.ids;return m("GetMany",{resourceName:e,resource:i,params:r,ids:a}),Promise.resolve(Promise.all(a.map(function(e){return"string"==typeof e?i.collection.doc(e).get():i.collection.doc(e.___refid).get()}))).then(function(e){var r;function i(e){return r?e:{data:u}}t.flogger.logDocument(a.length)();var s=e.map(function(e){return l({},e.data(),{id:e.id})}),u=n.softDelete?s.filter(function(e){return!e.deleted}):s,c=function(){if(n.relativeFilePaths)return Promise.resolve(Promise.all(u.map(function(e){return T(o,e)}))).then(function(e){return r=1,{data:e}})}();return c&&c.then?c.then(i):i(c)})})}catch(e){return Promise.reject(e)}}(e,r,h)})},getManyReference:function(e,r){return o(function(){return function(e,r,t){try{var n=t.rm,o=t.options,i=t.fireWrapper;m("GetManyReference",{resourceName:e,params:r});var a=r.filter||{};return Promise.resolve(n.TryGetResource(e,"REFRESH",a.collectionQuery)).then(function(t){var n;function u(e){return n?e:{data:b,total:w}}delete a.collectionQuery,m("apiGetManyReference",{resourceName:e,resource:t,params:r});var l=t.list,f=r.target,d=r.id,h=l;o.softDelete&&(h=l.filter(function(e){return!e.deleted}));var v=c(h,a),p={};p[f]=d;var g=c(v,p);if(null!=r.sort){var P=r.sort;s(g,P.field,"ASC"===P.order?"asc":"desc")}var y=(r.pagination.page-1)*r.pagination.perPage,b=g.slice(y,y+r.pagination.perPage),w=g.length,j=function(){if(o.relativeFilePaths)return Promise.resolve(Promise.all(g.map(function(e){return T(i,e)}))).then(function(e){return n=1,{data:e,total:w}})}();return j&&j.then?j.then(u):u(j)})}catch(e){return Promise.reject(e)}}(e,r,h)})},update:function(e,r){return o(function(){return function(e,r,t){try{var n=t.rm;m("Update",{resourceName:e,params:r});var o=r.id+"";return delete r.data.id,Promise.resolve(n.TryGetResource(e)).then(function(n){return m("Update",{resourceName:e,resource:n,params:r}),Promise.resolve(t.parseDataAndUpload(n,o,r.data)).then(function(r){var i=l({},r);return t.checkRemoveIdField(i,o),Promise.resolve(t.addUpdatedByFields(i)).then(function(){var a=t.transformToDb(e,i,o);return Promise.resolve(n.collection.doc(o).update(a)).then(function(){return{data:l({},r,{id:o})}})})})})}catch(e){return Promise.reject(e)}}(e,r,h)})},updateMany:function(e,r){return o(function(){return function(e,r,t){try{var n=t.rm;return m("UpdateMany",{resourceName:e,params:r}),delete r.data.id,Promise.resolve(n.TryGetResource(e)).then(function(n){return m("UpdateMany",{resourceName:e,resource:n,params:r}),Promise.resolve(Promise.all(r.ids.map(function(o){try{var i=o+"";return Promise.resolve(t.parseDataAndUpload(n,i,r.data)).then(function(r){var o=l({},r);return t.checkRemoveIdField(o,i),Promise.resolve(t.addUpdatedByFields(o)).then(function(){var a=t.transformToDb(e,o,i);return Promise.resolve(n.collection.doc(i).update(a)).then(function(){return l({},r,{id:i})})})})}catch(e){return Promise.reject(e)}}))).then(function(e){return{data:e}})})}catch(e){return Promise.reject(e)}}(e,r,h)})},create:function(e,r){return o(function(){return function(e,r,t){try{var n=t.fireWrapper;return Promise.resolve(t.rm.TryGetResource(e)).then(function(o){var i;function a(a){if(i)return a;var s=n.dbMakeNewId();return Promise.resolve(t.parseDataAndUpload(o,s,r.data)).then(function(r){var n=l({},r);return t.checkRemoveIdField(n,s),Promise.resolve(t.addCreatedByFields(n)).then(function(){return Promise.resolve(t.addUpdatedByFields(n)).then(function(){var r=t.transformToDb(e,n,s);return Promise.resolve(o.collection.doc(s).set(r,{merge:!1})).then(function(){return{data:l({},r,{id:s})}})})})})}m("Create",{resourceName:e,resource:o,params:r});var s=r.data&&r.data.id;m("Create",{hasOverridenDocId:s});var u=function(){if(s){var n=r.data.id;return Promise.resolve(o.collection.doc(n).get()).then(function(a){if(a.exists)throw new Error('the id:"'+n+"\" already exists, please use a unique string if overriding the 'id' field");return Promise.resolve(t.parseDataAndUpload(o,n,r.data)).then(function(r){if(!n)throw new Error("id must be a valid string");var a=l({},r);return t.checkRemoveIdField(a,n),Promise.resolve(t.addCreatedByFields(a)).then(function(){return Promise.resolve(t.addUpdatedByFields(a)).then(function(){var r=t.transformToDb(e,a,n);return m("Create",{docObj:a}),Promise.resolve(o.collection.doc(n).set(r,{merge:!1})).then(function(){return i=1,{data:l({},r,{id:n})}})})})})})}}();return u&&u.then?u.then(a):a(u)})}catch(e){return Promise.reject(e)}}(e,r,h)})},delete:function(e,r){return o(function(){return function(e,r,t){try{var n=t.rm;return t.options.softDelete?Promise.resolve(function(e,r,t){try{var n=r.id+"";return Promise.resolve(t.rm.TryGetResource(e)).then(function(o){m("DeleteSoft",{resourceName:e,resource:o,params:r});var i={deleted:!0};return Promise.resolve(t.addUpdatedByFields(i)).then(function(){return o.collection.doc(n).update(i).catch(function(e){p("DeleteSoft error",{error:e})}),{data:r.previousData}})})}catch(e){return Promise.reject(e)}}(e,r,t)):Promise.resolve(n.TryGetResource(e)).then(function(t){function n(e){return{data:r.previousData}}m("apiDelete",{resourceName:e,resource:t,params:r});var o=function(e,n){try{var o=Promise.resolve(t.collection.doc(r.id+"").delete()).then(function(){})}catch(e){return n(e)}return o&&o.then?o.then(void 0,n):o}(0,function(e){throw new Error(e)});return o&&o.then?o.then(n):n()})}catch(e){return Promise.reject(e)}}(e,r,h)})},deleteMany:function(e,r){return o(function(){return function(e,r,t){try{var n=t.rm,o=t.fireWrapper;return t.options.softDelete?Promise.resolve(function(e,r,t){try{return Promise.resolve(t.rm.TryGetResource(e)).then(function(n){return m("DeleteManySoft",{resourceName:e,resource:n,params:r}),Promise.resolve(Promise.all(r.ids.map(function(e){try{var r=e+"",o={deleted:!0};return Promise.resolve(t.addUpdatedByFields(o)).then(function(){return n.collection.doc(r).update(o).catch(function(e){p("apiSoftDeleteMany error",{error:e})}),r})}catch(e){return Promise.reject(e)}}))).then(function(e){return{data:e}})})}catch(e){return Promise.reject(e)}}(e,r,t)):Promise.resolve(n.TryGetResource(e)).then(function(t){function n(e){return{data:a}}m("DeleteMany",{resourceName:e,resource:t,params:r});for(var i,a=[],s=o.dbCreateBatch(),u=function(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e,r){if(e){if("string"==typeof e)return f(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(e,r):void 0}}(e))){t&&(e=t);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(r.ids);!(i=u()).done;){var c=i.value,l=t.collection.doc(c+"");s.delete(l),a.push(c)}var d=function(e,r){try{var t=Promise.resolve(s.commit()).then(function(){})}catch(e){return r(e)}return t&&t.then?t.then(void 0,r):t}(0,function(e){throw new Error(e)});return d&&d.then?d.then(n):n()})}catch(e){return Promise.reject(e)}}(e,r,h)})}};return g}});
//# sourceMappingURL=index.umd.js.map
