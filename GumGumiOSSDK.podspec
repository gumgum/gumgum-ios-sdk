Pod::Spec.new do |s|
  s.name             = "GumGumiOSSDK"
  s.version          = "0.1.4.1"
  s.summary          = "Serve GumGum ads in your native mobile app."
  s.description      = "GumGum is an advertising publisher platform. It is the forefront of in-image technology."
  s.homepage         = "http://gumgum.com"
  s.license          = { type: 'Custom', file: 'LICENSE.txt' }
  s.author           = { "Jake Peterson" => "jsksma2@gmail.com" }
  s.source           = { :git => "https://github.com/gumgum/gumgum-ios-sdk.git", :tag => s.version.to_s }
  s.social_media_url = 'https://twitter.com/gumgum'

  s.platform     = :ios, '7.1'

  s.requires_arc = true
  s.resource = 'GumGumiOSSDK.bundle'
  s.frameworks = 'UIKit', 'Security', 'CoreGraphics', 'WebKit', 'Foundation'
  s.framework = 'GumGumiOSSDK'
  s.ios.vendored_frameworks = 'GumGumiOSSDK.framework', 'libGumGumiOSSDK.a'
  s.xcconfig = {'LIBRARY_SEARCH_PATHS' => "$(SRCROOT)/Pods/**"}
end