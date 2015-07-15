Pod::Spec.new do |s|
  s.name                  = "GumGumiOSSDK"
  s.version               = "0.1.6"
  s.platform              = :ios, '7.1'
  s.summary               = "Serve GumGum ads in your native mobile app."
  s.description           = "GumGum is an advertising publisher platform. It is the forefront of in-image technology."
  s.homepage              = "http://gumgum.com"
  s.license               = { type: 'Copyright', file: 'LICENSE.txt' }
  s.author                = { "Jake Peterson" => "jsksma2@gmail.com" }
  s.source                = { :git => "https://github.com/gumgum/gumgum-ios-sdk.git", :tag => s.version.to_s }
  s.social_media_url      = 'https://twitter.com/gumgum'
  s.requires_arc          = true
  s.resource              = 'GumGumiOSSDK/GumGumiOSSDK.bundle'
  s.frameworks            = 'UIKit', 'CoreGraphics', 'WebKit', 'Foundation', 'MediaPlayer', 'SystemConfiguration', 'MobileCoreServices'
  s.weak_framework        = 'MessageUI'
  s.source_files          = 'GumGumiOSSDK/GumGumiOSSDKHeaders/*.h'
  s.preserve_paths        = 'GumGumiOSSDK/GumGumiOSSDK.framework'
  s.vendored_frameworks   = 'GumGumiOSSDK/GumGumiOSSDK.framework'
  s.xcconfig              = {
                            'LIBRARY_SEARCH_PATHS' => '"$(PODS_ROOT)/GumGumiOSSDK"',
                            'HEADER_SEARCH_PATHS' => '"${PODS_ROOT}/GumGumiOSSDK/GumGumiOSSDKHeaders"'
                          }
end