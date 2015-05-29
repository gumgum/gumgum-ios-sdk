//
//  GGAdManager.h
//  GumGumiOSSDKExample
//
//  Created by Jake Peterson on 6/4/14.
//  Copyright (c) 2014 GumGum Inc. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "GGAdDelegate.h"

@class GGAdView;
@class GGBadge;
@class WKProcessPool;
@class GGURL;
@class GGAdViewController;

typedef void(^GGObjectResultsBlock)(id responseObject, NSError *error);
typedef void(^GGAdCompletionBlock)(GGBadge *badgeInfo, NSError *error);

@protocol GGAdManagerDelegate <NSObject>

- (void)adViewControllerDidFinishLoading:(GGAdViewController *)viewController;

@end

@interface GGAdManager : NSObject
/*!
 *  Creates and returns a 'GGAdManager' object
 */
+ (GGAdManager *)sharedManager;

/*!
 *  The zone provided to you by our publisher development team.
 *
 *  @discussion The zone must be set in order to serve any advertisments. 
 *              Set this in your app delegate or as early as you can.
 */
@property (strong, nonatomic) NSString *zoneId;

/*!
 *  Specifies if your app costs money to download from the App Store.
 *  Defaults to NO.
 */
@property (nonatomic) BOOL isPaid;

/*!
 *  Subscribes and builds an adView & badgeButton.
 *
 *  @param url the url you would like the new adView & badgeButton to be associated to.
 *  @param viewControllerDelegate a viewController conforming to GGAdDelegate.
 *
 *  @return an array containing the new adView and badgeButton (in that order).
 */
- (NSArray *)subscribeUrl:(GGURL *)url
                 delegate:(id <GGAdManagerDelegate>)delegate
   viewControllerDelegate:(UIViewController <GGAdDelegate>*)viewControllerDelegate;

/*!
 *  Un-subscribes the adView associated to the url.
 *
 *  @param url the url associated to the adView you'd like to remove.
 */
- (void)unSubscribeUrl:(GGURL *)url;
@end
