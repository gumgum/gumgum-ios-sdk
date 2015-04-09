#
# Be sure to run `pod lib lint gumgumiossdk.podspec' to ensure this is a
# valid spec and remove all comments before submitting the spec.
#
# Any lines starting with a # are optional, but encouraged
#
# To learn more about a Podspec see http://guides.cocoapods.org/syntax/podspec.html
#

Pod::Spec.new do |s|
  s.name             = "GumGumiOSSDK"
  s.version          = "0.1.1"
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
  s.public_header_files = 'GumGumiOSSDK.framework/Versions/A/Headers/*.h'
  s.frameworks = 'UIKit', 'Security', 'CoreGraphics', 'WebKit', 'Foundation'

  s.xcconfig = { 'FRAMEWORK_SEARCH_PATHS' => "$(PODS_ROOT)/GumGumiOSSDK" }
  s.preserve_paths = 'GumGumiOSSDK.framework'
end