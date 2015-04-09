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
In your App Delegate:
```ObjC
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [[GGAdManager sharedManager] setZoneId:@"your zone ID"];
}
```
### Getting an In-Image Ad
Replace the `UIImageView` you want your ad to be placed in with `GGInImageView`.

__If you use storyboards__ you will need to change the **Custom Class** field of your `UIImageView` as well.

In `-viewDidLoad` (or any method called after your initialization):
```ObjC
- (void)viewDidLoad {
    [super viewDidLoad];

    GGInImageView *imageView = [[GGInImageView alloc] init];

    // All values are required
    imageView.imageURL = [NSURL URLWithString:@"http://gumgum.com"];
    imageView.keywords = @"An ad is worth a million billion impressions.";
    imageView.pageURL = [NSURL URLWithString:@"http://gumgum.com"];
    imageView.delegate = self; // Your UIViewController must conform to GGAdDelegate
}
```
To conform your `UIViewController` class to `GGAdDelegate`:
```ObjC
@interface YourViewController: UIViewController <GGAdDelegate>
```
The ad will __NOT__ start loading unless you set an image.
```ObjC
UIImage *image = [[UIImage alloc] init];

GGInImageView *imageView = [[GGInImageView alloc] initWithImage:image];
// or
imageView.image = image;
```

### Getting an In-Screen Ad
In-screen ads are controlled by the `UINavigationController` that manages your child controllers.
```ObjC
UIViewController *viewController = [[UIViewController alloc] init];
GGInScreenNavigationController *navigationController = [[GGInScreenNavigationController alloc] initWithRootViewController:viewController];
```
Now in your `UIViewController`, set your `keywords` and `pageURL`:
```ObjC
- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];

    if ([self.navigationController conformsToProtocol:@protocol(GGAdDelegate)]) {
        GGInScreenNavigationController *navController = (GGInScreenNavigationController *)self.navigationController;
        navController.keywords = @"Beauty, Lifestlye, Leisure";
        navController.pageURL = [NSURL URLWithString:@"http://www.vogue.com"];
    }
}
```
Keep in mind that in-screen ads are maintained in-between view controller presentations. So if you are pushing/presenting a view controller where you do not want to display an in-screen ad, simply set the `inScreenHidden` property on your navigation controller:
```ObjC
- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];

    if ([self.navigationController conformsToProtocol:@protocol(GGAdDelegate)]) {
        self.navigationController.inScreenHidden = YES;
    }
}

// Don't forget to restore inScreenHidden when leaving this view controller!
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