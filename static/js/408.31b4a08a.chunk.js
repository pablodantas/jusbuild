"use strict";(self.webpackChunkjus=self.webpackChunkjus||[]).push([[408],{64408:function(e,t,n){n.r(t),n.d(t,{MetamaskAdapter:function(){return ee}});var r=n(15861),a=n(15671),o=n(43144),i=n(97326),c=n(11752),s=n(60136),u=n(82963),l=n(61120),h=n(4942),p=n(64687),d=n.n(p),f=n(63811),m=n.n(f),v=n(23484),y=n(2583),k=n(29072),g=n(7861),E=n(62649),N=n.n(E),w="eip155",C="solana",b="other",O="eip155",x=function(e,t){if(e===b)return null;var n=t?"number"===typeof t?t:parseInt(t,16):function(e){if(e===w)return 1;if(e===C)return 1;throw new Error("Chain namespace ".concat(e," is not supported"))}(e);return e===w?function(e){return 1===e?{chainNamespace:w,chainId:"0x1",rpcTarget:"https://rpc.ankr.com/eth",displayName:"Ethereum Mainnet",blockExplorer:"https://etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:3===e?{chainNamespace:w,chainId:"0x3",rpcTarget:"https://rpc.ankr.com/eth_ropsten",displayName:"Ropsten Testnet",blockExplorer:"https://ropsten.etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:4===e?{chainNamespace:w,chainId:"0x4",rpcTarget:"https://rpc.ankr.com/eth_rinkeby",displayName:"Rinkeby Testnet",blockExplorer:"https://rinkeby.etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:5===e?{chainNamespace:w,chainId:"0x5",rpcTarget:"https://rpc.ankr.com/eth_goerli",displayName:"Goerli Testnet",blockExplorer:"https://goerli.etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:137===e?{chainNamespace:w,chainId:"0x89",rpcTarget:"https://rpc.ankr.com/polygon",displayName:"Polygon Mainnet",blockExplorer:"https://polygonscan.com",ticker:"MATIC",tickerName:"Polygon"}:80001===e?{chainNamespace:w,chainId:"0x13881",rpcTarget:"https://rpc.ankr.com/polygon_mumbai",displayName:"Polygon Mumbai Testnet",blockExplorer:"https://mumbai.polygonscan.com/",ticker:"MATIC",tickerName:"Polygon"}:56===e?{chainNamespace:w,chainId:"0x38",rpcTarget:"https://rpc.ankr.com/bsc",displayName:"Binance SmartChain Mainnet",blockExplorer:"https://bscscan.com",ticker:"BNB",tickerName:"Binance SmartChain"}:97===e?{chainNamespace:w,chainId:"0x61",rpcTarget:"https://rpc.ankr.com/bsc_testnet_chapel",displayName:"Binance SmartChain Testnet",blockExplorer:"https://testnet.bscscan.com",ticker:"BNB",tickerName:"Binance SmartChain"}:25===e?{chainNamespace:w,chainId:"0x19",rpcTarget:"https://rpc.cronos.org",displayName:"Cronos Mainnet",blockExplorer:"https://cronoscan.com/",ticker:"CRO",tickerName:"Cronos"}:338===e?{chainNamespace:w,chainId:"0x152",rpcTarget:"https://rpc-t3.cronos.org/",displayName:"Cronos Testnet",blockExplorer:"https://cronoscan.com/",ticker:"CRO",tickerName:"Cronos"}:8217===e?{chainNamespace:w,chainId:"0x2019",rpcTarget:"https://public-node-api.klaytnapi.com/v1/cypress",displayName:"Klaytn Mainnet",blockExplorer:"https://scope.klaytn.com",ticker:"KLAY",tickerName:"Klaytn"}:null}(n):e===C?function(e){return 1===e?{chainNamespace:C,chainId:"0x1",rpcTarget:"https://rpc.ankr.com/solana",displayName:"Solana Mainnet",blockExplorer:"https://explorer.solana.com",ticker:"SOL",tickerName:"Solana"}:2===e?{chainNamespace:C,chainId:"0x2",rpcTarget:"https://api.testnet.solana.com",displayName:"Solana Testnet",blockExplorer:"https://explorer.solana.com?cluster=testnet",ticker:"SOL",tickerName:"Solana"}:3===e?{chainNamespace:C,chainId:"0x3",rpcTarget:"https://api.devnet.solana.com",displayName:"Solana Devnet",blockExplorer:"https://explorer.solana.com?cluster=devnet",ticker:"SOL",tickerName:"Solana"}:null}(n):null};function T(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,l.Z)(e);if(t){var a=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,u.Z)(this,n)}}var Z=function(e){(0,s.Z)(n,e);var t=T(n);function n(e,r){var o;return(0,a.Z)(this,n),o=t.call(this,r),(0,h.Z)((0,i.Z)(o),"code",void 0),(0,h.Z)((0,i.Z)(o),"message",void 0),o.code=e,o.message=r||"",Object.defineProperty((0,i.Z)(o),"name",{value:"Web3AuthError"}),o}return(0,o.Z)(n,[{key:"toJSON",value:function(){return{name:this.name,code:this.code,message:this.message}}},{key:"toString",value:function(){return JSON.stringify(this.toJSON())}}]),n}(y.s),R=function(e){(0,s.Z)(n,e);var t=T(n);function n(e,r){var o;return(0,a.Z)(this,n),o=t.call(this,e,r),Object.defineProperty((0,i.Z)(o),"name",{value:"WalletInitializationError"}),o}return(0,o.Z)(n,null,[{key:"fromCode",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new n(e,"".concat(n.messages[e],", ").concat(t))}},{key:"notFound",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5001,e)}},{key:"notInstalled",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5002,e)}},{key:"notReady",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5003,e)}},{key:"windowBlocked",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5004,e)}},{key:"windowClosed",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5005,e)}},{key:"incompatibleChainNameSpace",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5006,e)}},{key:"duplicateAdapterError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5007,e)}},{key:"invalidProviderConfigError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5008,e)}},{key:"providerNotReadyError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5009,e)}},{key:"rpcConnectionError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5010,e)}},{key:"invalidParams",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5011,e)}},{key:"invalidNetwork",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5013,e)}}]),n}(Z);(0,h.Z)(R,"messages",{5e3:"Custom",5001:"Wallet is not found",5002:"Wallet is not installed",5003:"Wallet is not ready yet",5004:"Wallet window is blocked",5005:"Wallet window has been closed by the user",5006:"Incompatible chain namespace provided",5007:"Adapter has already been included",5008:"Invalid provider Config",5009:"Provider is not ready yet",5010:"Failed to connect with rpc url",5011:"Invalid params passed in",5013:"Invalid network provided"});var A=function(e){(0,s.Z)(n,e);var t=T(n);function n(e,r){var o;return(0,a.Z)(this,n),o=t.call(this,e,r),Object.defineProperty((0,i.Z)(o),"name",{value:"WalletLoginError"}),o}return(0,o.Z)(n,null,[{key:"fromCode",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new n(e,"".concat(n.messages[e]).concat(t))}},{key:"connectionError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5111,e)}},{key:"disconnectionError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5112,e)}},{key:"notConnectedError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5113,e)}},{key:"popupClosed",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5114,e)}}]),n}(Z);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){(0,h.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}(0,h.Z)(A,"messages",{5e3:"Custom",5111:"Failed to connect with wallet",5112:"Failed to disconnect from wallet",5113:"Wallet is not connected",5114:"Wallet popup has been closed by the user"});var D={OPENLOGIN:"openlogin",WALLET_CONNECT_V1:"wallet-connect-v1",WALLET_CONNECT_V2:"wallet-connect-v2"},S=P({TORUS_SOLANA:"torus-solana",PHANTOM:"phantom",SOLLET:"sollet",SOLLET_EXTENSION:"sollet-extension",SOLFLARE:"solflare",SLOPE:"slope"},D),_=P({TORUS_EVM:"torus-evm",METAMASK:"metamask",COINBASE:"coinbase"},D),j=P(P({},_),S);function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,l.Z)(e);if(t){var a=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,u.Z)(this,n)}}function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){(0,h.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W="external",Y={NOT_READY:"not_ready",READY:"ready",CONNECTING:"connecting",CONNECTED:"connected",DISCONNECTED:"disconnected",ERRORED:"errored"},q=B(B({},Y),{},{ADAPTER_DATA_UPDATED:"adapter_data_updated"}),F=function(e){(0,s.Z)(n,e);var t=M(n);function n(){var e;(0,a.Z)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return e=t.call.apply(t,[this].concat(o)),(0,h.Z)((0,i.Z)(e),"adapterData",{}),(0,h.Z)((0,i.Z)(e),"sessionTime",86400),(0,h.Z)((0,i.Z)(e),"chainConfig",null),e}return(0,o.Z)(n,[{key:"chainConfigProxy",get:function(){return this.chainConfig?B({},this.chainConfig):null}},{key:"setChainConfig",value:function(e){if(this.status!==Y.READY){if(!e.chainNamespace)throw R.notReady("ChainNamespace is required while setting chainConfig");var t=x(e.chainNamespace,e.chainId);this.chainConfig=B(B({},t),e)}}},{key:"setAdapterSettings",value:function(e){}},{key:"checkConnectionRequirements",value:function(){if(this.name!==j.WALLET_CONNECT_V1||this.status!==Y.CONNECTING){if(this.status===Y.CONNECTING)throw R.notReady("Already connecting");if(this.status===Y.CONNECTED)throw A.connectionError("Already connected");if(this.status!==Y.READY)throw A.connectionError("Wallet adapter is not ready yet, Please wait for init function to resolve before calling connect/connectTo function");if(!this.clientId)throw A.connectionError("Please initialize Web3Auth with a valid clientId in constructor")}}},{key:"checkInitializationRequirements",value:function(){if(this.status!==Y.NOT_READY){if(this.status===Y.CONNECTED)throw R.notReady("Already connected");if(this.status===Y.READY)throw R.notReady("Adapter is already initialized")}}},{key:"updateAdapterData",value:function(e){this.adapterData=e,this.emit(q.ADAPTER_DATA_UPDATED,{adapterName:this.name,data:e})}}]),n}(v.Ue),U="https://authjs.web3auth.io",K=N().getLogger("web3auth-logger");function G(e){var t,n=!1,r=0;try{t=window[e],n=!0,r=t.length;var a="__storage_test__";return t.setItem(a,a),t.removeItem(a),!0}catch(i){var o=i;return!(!o||22!==o.code&&1014!==o.code&&"QuotaExceededError"!==o.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==o.name||!n||0===r)}}var z=function(e){var t=(0,g.Z)(e);return!t.exp||t.exp<Math.floor(Date.now()/1e3)},H=function(){var e=(0,r.Z)(d().mark((function e(t,n){var r,a;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={payload:t,header:{t:"solana"===n?"sip99":"eip191"},network:"solana"===n?"solana":"ethereum"},e.next=6,(0,k.v_)("".concat(U,"/siww/get"),r);case 6:if((a=e.sent).success){e.next=9;break}throw new Error("Failed to authenticate user, Please reach out to Web3Auth Support team");case 9:return e.abrupt("return",a.challenge);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),V=function(){var e=(0,r.Z)(d().mark((function e(t,n,r,a,o,i){var c,s;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={signature:{s:n,t:"solana"===t?"sip99":"eip191"},message:r,issuer:a,audience:window.location.hostname,timeout:o},e.next=4,(0,k.v_)("".concat(U,"/siww/verify"),c,{headers:{client_id:i,wallet_provider:a}});case 4:if((s=e.sent).success){e.next=8;break}throw K.error("Failed to authenticate user, ,message verification failed",s.error),new Error("Failed to authenticate user, ,message verification failed");case 8:return e.abrupt("return",s.token);case 9:case"end":return e.stop()}}),e)})));return function(t,n,r,a,o,i){return e.apply(this,arguments)}}(),J=function(e,t,n){return G("localStorage")?localStorage.setItem("".concat(e.toLowerCase(),"_").concat(t),n):null};function Q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,l.Z)(e);if(t){var a=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,u.Z)(this,n)}}var X=function(e){(0,s.Z)(n,e);var t=Q(n);function n(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.Z)(this,n),e=t.call(this),(0,h.Z)((0,i.Z)(e),"clientId",void 0),e.clientId=r.clientId,e}return(0,o.Z)(n,[{key:"authenticateUser",value:function(){var e=(0,r.Z)(d().mark((function e(){var t,n,r,a,o,i,c,s,u,l;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.provider&&null!==(t=this.chainConfig)&&void 0!==t&&t.chainId){e.next=2;break}throw A.notConnectedError();case 2:if(n=this.chainConfig,r=n.chainNamespace,a=n.chainId,this.status===Y.CONNECTED){e.next=5;break}throw A.notConnectedError("Not connected with wallet, Please login/connect first");case 5:return e.next=7,this.provider.request({method:"eth_accounts"});case 7:if(!((o=e.sent)&&o.length>0)){e.next=26;break}if(h=o[0],p=this.name,!(i=G("localStorage")?localStorage.getItem("".concat(h.toLowerCase(),"_").concat(p)):null)){e.next=14;break}if(z(i)){e.next=14;break}return e.abrupt("return",{idToken:i});case 14:return c={domain:window.location.origin,uri:window.location.href,address:o[0],chainId:parseInt(a,16),version:"1",nonce:Math.random().toString(36).slice(2),issuedAt:(new Date).toISOString()},e.next=17,H(c,r);case 17:return s=e.sent,e.next=20,this.provider.request({method:"personal_sign",params:[s,o[0]]});case 20:return u=e.sent,e.next=23,V(r,u,s,this.name,this.sessionTime,this.clientId);case 23:return l=e.sent,J(o[0],this.name,l),e.abrupt("return",{idToken:l});case 26:throw A.notConnectedError("Not connected with wallet, Please login/connect first");case 27:case"end":return e.stop()}var h,p}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"disconnect",value:function(){var e=(0,r.Z)(d().mark((function e(){var t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.status===Y.CONNECTED){e.next=2;break}throw A.disconnectionError("Not connected with wallet");case 2:return e.next=4,this.provider.request({method:"eth_accounts"});case 4:(t=e.sent)&&t.length>0&&(n=t[0],r=this.name,G("localStorage")&&localStorage.removeItem("".concat(n.toLowerCase(),"_").concat(r)));case 6:case"end":return e.stop()}var n,r}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),n}(F);function $(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,l.Z)(e);if(t){var a=(0,l.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,u.Z)(this,n)}}var ee=function(e){(0,s.Z)(n,e);var t=$(n);function n(e){var r;return(0,a.Z)(this,n),r=t.call(this,e),(0,h.Z)((0,i.Z)(r),"adapterNamespace",O),(0,h.Z)((0,i.Z)(r),"currentChainNamespace",w),(0,h.Z)((0,i.Z)(r),"type",W),(0,h.Z)((0,i.Z)(r),"name",j.METAMASK),(0,h.Z)((0,i.Z)(r),"status",Y.NOT_READY),(0,h.Z)((0,i.Z)(r),"rehydrated",!1),(0,h.Z)((0,i.Z)(r),"metamaskProvider",null),r.chainConfig=(null===e||void 0===e?void 0:e.chainConfig)||null,r.sessionTime=(null===e||void 0===e?void 0:e.sessionTime)||86400,r}return(0,o.Z)(n,[{key:"provider",get:function(){return this.status===Y.CONNECTED&&this.metamaskProvider?this.metamaskProvider:null},set:function(e){throw new Error("Not implemented")}},{key:"init",value:function(){var e=(0,r.Z)(d().mark((function e(t){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,c.Z)((0,l.Z)(n.prototype),"checkInitializationRequirements",this).call(this),e.next=3,m()({mustBeMetaMask:!0});case 3:if(this.metamaskProvider=e.sent,this.metamaskProvider){e.next=6;break}throw R.notInstalled("Metamask extension is not installed");case 6:if(this.status=Y.READY,this.emit(q.READY,j.METAMASK),e.prev=8,K.debug("initializing metamask adapter"),!t.autoConnect){e.next=14;break}return this.rehydrated=!0,e.next=14,this.connect();case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(8),this.emit(q.ERRORED,e.t0);case 19:case"end":return e.stop()}}),e,this,[[8,16]])})));return function(t){return e.apply(this,arguments)}}()},{key:"setAdapterSettings",value:function(e){this.status!==Y.READY&&(null!==e&&void 0!==e&&e.sessionTime&&(this.sessionTime=e.sessionTime),null!==e&&void 0!==e&&e.clientId&&(this.clientId=e.clientId))}},{key:"connect",value:function(){var e=(0,r.Z)(d().mark((function e(){var t=this;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,c.Z)((0,l.Z)(n.prototype),"checkConnectionRequirements",this).call(this),this.chainConfig||(this.chainConfig=x(w,1)),this.status=Y.CONNECTING,this.emit(q.CONNECTING,{adapter:j.METAMASK}),this.metamaskProvider){e.next=6;break}throw A.notConnectedError("Not able to connect with metamask");case 6:return e.prev=6,e.next=9,this.metamaskProvider.request({method:"eth_requestAccounts"});case 9:if(this.metamaskProvider.chainId===this.chainConfig.chainId){e.next=13;break}return e.next=13,this.switchChain(this.chainConfig);case 13:if(this.status=Y.CONNECTED,this.provider){e.next=16;break}throw A.notConnectedError("Failed to connect with provider");case 16:return this.provider.once("disconnect",(function(){t.disconnect()})),this.emit(q.CONNECTED,{adapter:j.METAMASK,reconnected:this.rehydrated}),e.abrupt("return",this.provider);case 21:throw e.prev=21,e.t0=e.catch(6),this.status=Y.READY,this.rehydrated=!1,this.emit(q.ERRORED,e.t0),A.connectionError("Failed to login with metamask wallet");case 27:case"end":return e.stop()}}),e,this,[[6,21]])})));return function(){return e.apply(this,arguments)}}()},{key:"disconnect",value:function(){var e=(0,r.Z)(d().mark((function e(){var t,r,a=arguments;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:{cleanup:!1},e.next=3,(0,c.Z)((0,l.Z)(n.prototype),"disconnect",this).call(this);case 3:null===(t=this.provider)||void 0===t||t.removeAllListeners(),r.cleanup?(this.status=Y.NOT_READY,this.metamaskProvider=null):this.status=Y.READY,this.rehydrated=!1,this.emit(q.DISCONNECTED);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUserInfo",value:function(){var e=(0,r.Z)(d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.status===Y.CONNECTED){e.next=2;break}throw A.notConnectedError("Not connected with wallet, Please login/connect first");case 2:return e.abrupt("return",{});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"switchChain",value:function(){var e=(0,r.Z)(d().mark((function e(t){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.metamaskProvider){e.next=2;break}throw A.notConnectedError("Not connected with wallet");case 2:return e.prev=2,e.next=5,this.metamaskProvider.request({method:"wallet_switchEthereumChain",params:[{chainId:t.chainId}]});case 5:case 12:e.next=15;break;case 7:if(e.prev=7,e.t0=e.catch(2),4902!==e.t0.code){e.next=14;break}return e.next=12,this.metamaskProvider.request({method:"wallet_addEthereumChain",params:[{chainId:t.chainId,chainName:t.displayName,rpcUrls:[t.rpcTarget]}]});case 14:throw e.t0;case 15:case"end":return e.stop()}}),e,this,[[2,7]])})));return function(t){return e.apply(this,arguments)}}()}]),n}(X)}}]);