// VAST Inspector

const videoElement = document.getElementById('video-element');
const playButton = document.getElementById('play-button');
const adContainer = document.getElementById('ad-container');

const VastUrlInput = document.getElementById('input-vast');
const VpaidModeInput = document.getElementById('vpaid-input');

// const vastRequestURL = `https://pubads.g.doubleclick.net/gampad/ads?allcues=0,1000&sz=1920x1080&iu=%2F2605%2Fmlb.tv%2Fdesktop_live&gdfp_req=1&env=vp&output=xml_vast4&unviewed_position_start=1&url=https%3A%2F%2Fwww.mlb.com%2Ftv%2Fg718091%2Fv6b3957f0-2275-4d1e-aad2-583d9a4d945f%23game%3D718091%2Ctfs%3D20230521_173500%2Cgame_state%3Dlive&description_url=mlb.tv&pmnd=0&pmxd=120000&pmad=8&vpos=midroll&pp=mlbtv_csai_live&pod=2&ad_rule=0&vid=6b3957f0-2275-4d1e-aad2-583d9a4d945f&mridx=1&ppid=58d44b3fbd2cceb9b47d91da71c2d2c0bce2c48d162eda211c61710f383783ba&cmsid=2473515&nofb=0&cust_params=userType%3DPAID%26aam_uuid%3D13801678826595452754040997344520843234%26entitlement%3DEXECMLB%2CSUBSCRIBERVOD%26env%3Dmlbtvvod&vpa=auto&vpmute=0&hl=en&us_privacy=1---&sid=FB05432B-7489-402C-93CC-48476AC780E0`
// const vastRequestURL = `https://pubads.g.doubleclick.net/gampad/ads?iu=iu=/2605/qa_mlb.tv/roku_live&cust_params=env%3Dmlbtvlive%26dai_source%3Dpod_serving&description_url=https%3A%2F%2Fwww.yesnetwork.com%2F&tfcd=0&npa=0&sz=640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=[timestamp]`

// const vastRequestURL = `https://pubads.g.doubleclick.net/gampad/ads?sz=1920x1080&iu=/2605/qa_mlb.tv/roku_live&cust_params=env%3Dmlbtvlive%26dai_source%3Dpod_serving&gdfp_req=1&env=vp&output=xml_vast4&unviewed_position_start=1&url=https%3A%2F%2Fwww.mlb.com%2Ftv%2Fg717692%2Fv290f2c17-8dc0-448f-b62c-e2a7f8272673%23game%3D717692%2Ctfs%3D20230619_224000%2Cgame_state%3Dlive&description_url=mlb.tv&correlator=3091176728751694&pmnd=0&pmxd=120000&pmad=-1&vpos=midroll&pp=mlbtv_ssai_live&pod=2&ad_rule=0&ad_type&asset&vid=290f2c17-8dc0-448f-b62c-e2a7f8272673&mridx=1&ppid=58d44b3fbd2cceb9b47d91da71c2d2c0bce2c48d162eda211c61710f383783ba&cmsid=2473515&nofb=0`;

let adDisplayContainer;
let adsLoader;
let adsManager;
let vastRequestURL;

// VastUrlInput.value = 'https://pubads.g.doubleclick.net/gampad/ads?sz=1920x1080&iu=/2605/qa_mlb.tv/roku_live&cust_params=env%3Dmlbtvlive%26dai_source%3Dpod_serving&gdfp_req=1&env=vp&output=xml_vast4&unviewed_position_start=1&url=https%3A%2F%2Fwww.mlb.com%2Ftv%2Fg717692%2Fv290f2c17-8dc0-448f-b62c-e2a7f8272673%23game%3D717692%2Ctfs%3D20230619_224000%2Cgame_state%3Dlive&description_url=mlb.tv&correlator=3091176728751694&pmnd=0&pmxd=120000&pmad=-1&vpos=midroll&pp=mlbtv_ssai_live&pod=2&ad_rule=0&ad_type&asset&vid=290f2c17-8dc0-448f-b62c-e2a7f8272673&mridx=1&ppid=58d44b3fbd2cceb9b47d91da71c2d2c0bce2c48d162eda211c61710f383783ba&cmsid=2473515&nofb=0';
// https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_ad_samples&sz=640x480&cust_params=sample_ct%3Dlinearvpaid2js&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=

// Define a variable to track whether there are ads loaded and initially set it to false
var adsLoaded = false;


// On window load, attach an event to the play button click
// that triggers playback on the video element
window.addEventListener('load', function(event) {

  videoElement.addEventListener('play', function(event) {
    loadAds(event);
  });

  playButton.addEventListener('click', function(event) {
    initializeIMA();

  });
});

window.addEventListener('resize', function(event) {
  console.log("Window Resized");
  if(adsManager) {
    var width = videoElement.clientWidth;
    var height = videoElement.clientHeight;
    adsManager.resize(width, height, google.ima.ViewMode.NORMAL);
  }
});


function initializeIMA() {
  console.log("Initializing IMA");
  adContainer.addEventListener('click', adContainerClick);
  google.ima.ImaSdkSettings.VpaidMode = + VpaidModeInput.checked;
  console.log(`Vpaid Enabled: ${VpaidModeInput.checked}`);

  google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode);
  adDisplayContainer = new google.ima.AdDisplayContainer(adContainer, videoElement);
  adsLoader = new google.ima.AdsLoader(adDisplayContainer);

  adsLoader.addEventListener(
    google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
    onAdsManagerLoaded, false);
  
  adsLoader.addEventListener(
    google.ima.AdErrorEvent.Type.AD_ERROR,
    onAdError, false);


  // Let the AdsLoader know when the video has ended
  videoElement.addEventListener('ended', function() {
    adsLoader.contentComplete();
  });

  let adsRequest = new google.ima.AdsRequest();

  vastRequestURL = VastUrlInput.value;
  console.log(VastUrlInput.value);
  adsRequest.adTagUrl = vastRequestURL;

  // Specify the linear and nonlinear slot sizes. This helps the SDK to
  // select the correct creative if multiple are returned.
  adsRequest.linearAdSlotWidth = videoElement.clientWidth;
  adsRequest.linearAdSlotHeight = videoElement.clientHeight;
  adsRequest.nonLinearAdSlotWidth = videoElement.clientWidth;
  adsRequest.nonLinearAdSlotHeight = videoElement.clientHeight / 3;

  // Pass the request to the adsLoader to request ads
  adsLoader.requestAds(adsRequest);
}

function loadAds(event) {
  // Prevent this function from running on if there are already ads loaded
  if (adsLoaded) {
    return;
  }
  adsLoaded = true;

  // Prevent triggering immediate playback when ads are loading
  event.preventDefault();

  console.log("Loading ads");

  
  // Initialize the container. Must be done via a user action on mobile devices.
  videoElement.load();
  adDisplayContainer.initialize();

  var width = videoElement.clientWidth;
  var height = videoElement.clientHeight;
  try {
    adsManager.init(width, height, google.ima.ViewMode.NORMAL);
    adsManager.start();
  } 
  catch (adError) {
    // Play the video without ads, if an error occurs
    console.log("AdsManager could not be started");
    videoElement.play();
  }
}

function onAdsManagerLoaded(adsManagerLoadedEvent) {
  // Instantiate the AdsManager from the adsLoader response and pass it the video element
  adsManager = adsManagerLoadedEvent.getAdsManager(
    videoElement);


  adsManager.addEventListener(
    google.ima.AdErrorEvent.Type.AD_ERROR,
    onAdError, false);

  adsManager.addEventListener(
    google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,
    onContentPauseRequested);

  adsManager.addEventListener(
    google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
    onContentResumeRequested);

  adsManager.addEventListener(
    google.ima.AdEvent.Type.LOADED,
    onAdLoaded);
  
  adsManager.addEventListener(
    google.ima.AdEvent.Type.STARTED,
    onAdStarted);

  adsManager.addEventListener(
    google.ima.AdEvent.Type.IMPRESSION,
    onAdImpression);
  
  videoElement.play();
}

function onAdError(adErrorEvent) {
  // Handle the error logging.
  console.log(adErrorEvent.getError());
  videoElement.play();
  if(adsManager) {
    adsManager.destroy();
  }
}

function onContentPauseRequested() {
  videoElement.pause();
}

function onContentResumeRequested() {
  videoElement.play();
}

function adContainerClick(event) {
  console.log("ad container clicked");
  if(videoElement.paused) {
    videoElement.play();
  } else {
    videoElement.pause();
  }
}

function onAdLoaded(adEvent) {
  var ad = adEvent.getAd();
  console.log('Ad Loaded Event');
  if (!ad.isLinear()) {
    videoElement.play();
  }
}

function onAdStarted(event) {
  const CurrentAd = event.getAd();
  const CurrentAdPod = CurrentAd.getAdPodInfo();
  console.group('Ad Information & Details');
  console.log(`Id: ${CurrentAd.getAdId()}`);
  console.log(`Title: ${CurrentAd.getTitle()}`);
  console.log(`Description: ${CurrentAd.getDescription()}`);
  console.log(`Advertiser: ${CurrentAd.getAdvertiserName() || null}`);
  console.group('Media Details');
    console.log(`Duration: ${CurrentAd.getDuration()}s`);
    console.log(`Size: ${CurrentAd.getVastMediaWidth()}x${CurrentAd.getVastMediaHeight()}`);
    console.log(`Bitrate: ${CurrentAd.getVastMediaBitrate()/1000}Kbps`);
  console.groupEnd();
  console.group(`Pod Info - Pod #${CurrentAdPod.getPodIndex()}`)
    console.log(`Ad Pod: Ad Position - ${CurrentAdPod.getAdPosition()}`);
  console.groupEnd();
  console.log(CurrentAd.getWrapperAdSystems());
  console.groupEnd();
}

function onAdImpression(event) {
  const AdData = event.getAdData();
  console.log('onAdImpression');
  console.log(AdData);
}