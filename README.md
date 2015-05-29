GumGum iOS SDK
===================

GumGum is the leading in-image and in-screen advertising platform, driving brand engagement for advertisers and increased revenue for publishers across every screen.

## Features
- [x] Swift & Objective-C compatible
- [x] Cocoapods support
- [x] In-image & In-screen ad support
- [x] Native light box for optimal video ads
- [x] RTB support

## Requirements
- iOS 7.1+

## Communication
- If you need help, use [Stack Overflow]. (Tag 'GumGum')
- If you'd like to ask a general question, use [Stack Overflow]
- If you found a bug, open an issue.
- If you have a feature request, open an issue.

## Installation
```
pod 'GumGumiOSSDK'
```
If you have never used [Cocoapods] before, you will need to [install it first].

## Usage
```ObjC
#import <GumGumiOSSDK/GumGumiOSSDK.h>
```
Setup your App's information. Do this in your App Delegate or as early as you can.
```ObjC
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Make sure you have setup your keyWindow first.
    [window makeKeyAndVisible];

    // All values are required.
    GGAdManager *manager = [GGAdManager sharedManager];
    manager.zoneId = @"your zone ID";
    manager.keywords = @"An ad is worth a million billion impressions.";
    manager.storeURL = [NSURL URLWithString:@"your app store url or website url"];
    manager.isPaid = YES; // Defaults to NO

    return YES;
}
```
### Getting an In-Image Ad
Replace the `UIImageView` you want your ad to be placed in with `GGInImageView`.

__If you use storyboards__ you will need to change the **Custom Class** field of your `UIImageView` as well.

In `-viewDidLoad` (or any method called after your initialization):
```ObjC
- (void)viewDidLoad {
    [super viewDidLoad];

    // All values are required
    GGInImageView *imageView = [[GGInImageView alloc] init];
    imageView.imageURL = [NSURL URLWithString:@"http://gumgum.com"];
    imageView.delegate = self; // A UIViewController conforming to GGAdDelegate

    // The ad will NOT start loading until an image is set.
    imageView.image = [UIImage alloc] init];
}
```
To conform a `UIViewController` to `GGAdDelegate`:
```ObjC
@interface YourViewController: UIViewController <GGAdDelegate>
```

### Getting an In-Screen Ad
In-screen ads are controlled by an instance of `UINavigationController`.
```ObjC
UIViewController *viewController = [[UIViewController alloc] init];
GGInScreenNavigationController *navigationController = [[GGInScreenNavigationController alloc] initWithRootViewController:viewController];
```

Keep in mind that in-screen ads are maintained in-between view controller presentations. To control which view controllers display an ad, simply conform the view controllers you'd like to display an ad with `GGAdDelegate`.

If you happen to conform a view controller to `GGAdDelegate` for displaying a `GGInImageView`, but simeltaneously don't want an in-screen ad to be displayed, simply set the `inScreenHidden` property on your navigation controller:
```ObjC
- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];

    if ([self.navigationController conformsToProtocol:@protocol(GGAdDelegate)]) {
        self.navigationController.inScreenHidden = YES;
    }
}

// Don't forget to restore inScreenHidden when leaving that view controller!
- (void)viewWillDisappear:(BOOL)animated {
    [super viewWillDisappear:animated];

    if ([self.navigationController conformsToProtocol:@protocol(GGAdDelegate)]) {
        self.navigationController.inScreenHidden = NO;
    }
}
```

Full Documentation can be found [here](http://cocoadocs.org/docsets/GumGumiOSSDK/0.1.1/).

That's it!
### Contact
Follow GumGum on Twitter ([@GumGum])
### Author
Jake Peterson ([@jakenberg])
### License
Our license can be found [here.](LICENSE.txt)

[GumGumiOSSDK project]:https://bitbucket.org/gumgum/gumgumiossdk
[Stack Overflow]:http://www.stackoverflow.com/questions/tagged/gumgum
[@GumGum]:https://twitter.com/GumGum
[@jakenberg]:https://github.com/Jakenberg
[Cocoapods]:http://cocoapods.org/
[install it first]:http://guides.cocoapods.org/using/getting-started.html