GumGum iOS SDK
===================

GumGum is the leading in-image and in-screen advertising platform, driving brand engagement for advertisers and increased revenue for publishers across every screen.

## Features
- [x] Swift & Objective-C compatible
- [x] Cocoapods support
- [x] Native light box for optimal video ads
- [x] In-image, In-screen, & Native ad support
- [x] OpenRTB 2.3 spec support

## Requirements
- iOS 7.1+

## Communication
- If you need help, use [Stack Overflow]. (Tag 'GumGum')
- If you'd like to ask a general question, use [Stack Overflow]
- If you found a bug, open an issue.
- If you have a feature request, open an issue.

## Installation
#### Cocoapods
If you have never used [Cocoapods] before, you'll need to [install it first].
```
pod 'GumGumiOSSDK'
```
#### Alternatively, if you want to install the framework manually:
1) Link the required frameworks in your target's "Link Binary With Libraries":
![Installation step 1](https://s3.amazonaws.com/gumgum-content/ios/prod/images/custom-installation-step-1.png)
**Note:** `MessageUI.framework` is optional

2) Link `GumGumiOSSDK.framework` with your target:
![Installation step 2](https://s3.amazonaws.com/gumgum-content/ios/prod/images/custom-installation-step-2.png)

3) Add `GumGumiOSSDK.bundle` to your target's "Copy Bundle Resources" build phase:
![Installation step 3](https://s3.amazonaws.com/gumgum-content/ios/prod/images/custom-installation-step-3.png)

4) Build (<kbd>&#8984;</kbd>+<kbd>B</kbd>) your project to make sure everything is working properly.
## Getting Started
```ObjC
#import <GumGumiOSSDK/GumGumiOSSDK.h>
```
Setup your app's information. Do this in your App Delegate or as early as you can.
```ObjC
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Make sure you have setup your keyWindow first.
    [window makeKeyAndVisible];

    NSURL *url = [NSURL URLWithString:@"your app store url or website url"];
    [GumGumSDK initializeWithZoneId:@"your zone ID" appStoreURL:url isPaid:YES];

    return YES;
}
```
### Once you're setup, there are 4 different types of ad products to choose from:
* [Native Ad](https://github.com/gumgum/gumgum-ios-sdk#getting-a-native-ad)
* [In-Image Ad](https://github.com/gumgum/gumgum-ios-sdk#getting-an-in-image-ad)
* [In-Screen Ad](https://github.com/gumgum/gumgum-ios-sdk#getting-an-in-screen-ad)
* [In-Feed Ad](https://github.com/gumgum/gumgum-ios-sdk#getting-an-in-feed-ad)

-------
## Getting a Native Ad
```ObjC
[GGNativeAdManager getNativeAdForSize:CGSizeMake(320, 100)
                          placementId:// Your placement id (provided by GumGum)
               viewControllerDelegate:// A UIViewController conforming to GGAdDelegate
                           completion:^(GGNativeAd *nativeAd, NSError *error) {
    // Your logic for displaying the native ad

    /* GGNativeAd model contains:
     *  title
     *  adDescription
     *  imageView.image or imageUrl
     *  sponsoredBy
     */
}];
```

## Getting an In-Image Ad
Inherit the `UIImageView` you want your ad to be placed in from `GGInImageView`.

__If you use storyboards__, you will need to change the "Custom Class" field of your `UIImageView` to `GGInImageView`:

![In-Image custom class example](https://s3.amazonaws.com/gumgum-content/ios/prod/images/in-image-custom-class-example.png)

In `-viewDidLoad` (or any method called after your initialization):
```ObjC
- (void)viewDidLoad {
    [super viewDidLoad];

    // All values are required
    GGInImageView *imageView = [[GGInImageView alloc] init];
    imageView.imageURL = [NSURL URLWithString:@"http://gumgum.com"];
    imageView.pageURL = [NSURL URLWithString:@"http://gumgum.com"];
    imageView.delegate = // A UIViewController conforming to GGAdDelegate

    // The ad will NOT start loading until an image is set.
    imageView.image = [UIImage alloc] init];
}
```
To conform a `UIViewController` to `GGAdDelegate`:
```ObjC
@interface YourViewController: UIViewController <GGAdDelegate>
```
## Getting an In-Screen Ad
In-screen ads are controlled by an instance of `UINavigationController`.
```ObjC
UIViewController *viewController = [[UIViewController alloc] init];
GGInScreenNavigationController *navigationController = [[GGInScreenNavigationController alloc] initWithRootViewController:viewController];
navigationController.pageURL = [NSURL URLWithString:@"http://gumgum.com"];
navigationController.keywords = @"An, ad, is, worth, a, million, billion, impressions";
```

Keep in mind that in-screen ads are maintained in-between view controller presentations. To control which view controllers display an ad, simply conform the view controllers you'd like to display an ad in with `GGAdDelegate`.

If you happen to conform a view controller to `GGAdDelegate` for displaying a `GGInImageView`, but simeltaneously don't want an in-screen ad to be displayed, simply set the `inScreenHidden` property on your navigation controller:
```ObjC
- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];

    if ([self.navigationController conformsToProtocol:@protocol(GGAdDelegate)]) {
        GGInScreenNavigationController *navController = (GGInScreenNavigationController *)self.navigationController;
        [navController setInScreenHidden:YES animated:YES];
    }
}

// Don't forget to restore inScreenHidden when leaving that view controller!
- (void)viewWillDisappear:(BOOL)animated {
    [super viewWillDisappear:animated];

    if ([self.navigationController conformsToProtocol:@protocol(GGAdDelegate)]) {
        GGInScreenNavigationController *navController = (GGInScreenNavigationController *)self.navigationController;
        [navController setInScreenHidden:NO animated:YES];
    }
}
```

## Getting an In-Feed Ad
Conform the instance that manages the `UITableView` you wish to display ads in with `GGInFeedDataSource`.

At the time in which you'd like to start loading an in-feed ad:
```ObjC
CGSize size = CGSizeMake(300, 100);
id <GGInFeedDataSource> dataSource = // An instance conforming to GGInFeedDataSource
UIViewController <GGAdDelegate>*viewController = // An instance of UIViewController that conforms to GGAdDelegate
[[GGInFeedManager sharedManager] getInFeedAdWithSize:size
                                         placementId:// Your placement id (provided by GumGum)
                                           indexPath:// Optional. If you wish to specify exactly where the ad should be placed.
                                          dataSource:dataSource
                                            delegate:delegate];
```
As needed, there are helper methods for your `UITableView` so it can accomodate the display of native ads.
```ObjC
- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    NSUInteger rows = // Number of rows you plan to show in this section
    NSUINteger nativeAdCount = [[GGInFeedManager sharedManager] nativeAdCountForSection:section];
    return rows + nativeAdCount;
}
```
```ObjC
- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    // Your UITableViewCell setup logic

    GGNativeAd *nativeAd = [[GGInFeedManager sharedManager] nativeAdAtIndexPath:indexPath cell:cell];
    if (nativeAd) {
        // Your logic for displaying the native ad
    } else {
        // Your normal cell display implementation

        // Keep in mind you'll want to offset the array of data you are
        // normally displaying. Here is a rough example...
        NSArray *rowItems = @[];
        NSDictionary *cellInfo = rowItems[indexPath.row + offset]; // You should always add the offset!
    }

    return cell;
}
```
-------
More Documentation can be found [here](http://cocoadocs.org/docsets/GumGumiOSSDK/0.1.1/).

That's it!
### Contact
Follow GumGum on Twitter ([@GumGum])
### Author
Jake Peterson ([@jakenberg])
### [License](LICENSE.txt)

[GumGumiOSSDK project]:https://bitbucket.org/gumgum/gumgumiossdk
[Stack Overflow]:http://www.stackoverflow.com/questions/tagged/gumgum
[@GumGum]:https://twitter.com/GumGum
[@jakenberg]:https://github.com/Jakenberg
[Cocoapods]:http://cocoapods.org/
[install it first]:http://guides.cocoapods.org/using/getting-started.html