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
@class GGBuilder;
@class GGBuilderViewController;

typedef void(^GGObjectResultsBlock)(id responseObject, NSError *error);
typedef void(^GGAdCompletionBlock)(GGBadge *badgeInfo, NSError *error);

@protocol GGAdManagerDelegate <NSObject>

- (void)adViewControllerDidFinishLoading:(GGBuilderViewController *)viewController;

@end

@interface GGAdManager : NSObject
/*!
 *  Creates and returns a 'GGAdManager' object
 */
+ (GGAdManager *)sharedManager;

/*!
 *  The zone provided to you by our publisher development team.
 *
 *  @note The zone must be set in order to serve any advertisments.
 *        Set this in your app delegate or as early as you can.
 */
@property (strong, nonatomic) NSString *zoneId;

/*!
 *  Specifies if your app costs money to download from the App Store.
 *  Defaults to NO.
 */
@property (nonatomic) BOOL isPaid;

/*!
 *  The url where your app is published in the App Store
 */
@property (nonatomic, strong) NSURL *appStoreUrl;

/*!
 *  Subscribes and builds the components specified by the builder
 *
 *  @param builder the object representing the type of implementation you desire.
 *
 *  @note you can use the builder object as a state machine.
 */
- (GGBuilderViewController *)enqueueBuilder:(GGBuilder *)builder
                     viewControllerDelegate:(UIViewController <GGAdDelegate>*)viewControllerDelegate
                            managerDelegate:(id<GGAdManagerDelegate>)delegate;

/*!
 *  Un-subscribes the adView associated to the url.
 *
 *  @param builder the object representing the implementation of the ad.
 */
- (void)dequeueBuilder:(GGBuilder *)builder;

- (GGBuilderViewController *)viewControllerForBuilder:(GGBuilder *)builder;

- (void)setIndexPath:(NSIndexPath *)indexPath onBuilder:(GGBuilder *)builder;

- (BOOL)shouldShowAdAtIndexPath:(NSIndexPath *)indexPath builder:(GGBuilder *)builder;

@end
