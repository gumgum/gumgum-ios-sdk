//
//  GGAdManager.h
//  GumGumiOSSDKExample
//
//  Created by Jake Peterson on 6/4/14.
//  Copyright (c) 2014 GumGum Inc. All rights reserved.
//

#import <UIKit/UIKit.h>

@class GGAdView;
@class GGBadgeInfo;
@class WKProcessPool;

typedef void(^GGObjectResultsBlock)(id responseObject, NSError *error);
typedef void(^GGAdCompletionBlock)(GGBadgeInfo *badgeInfo, NSError *error);

@interface GGAdManager : NSObject
/*!
 *  Creates and returns a 'GGAdManager' object
 */
+ (GGAdManager *)sharedManager;

/*!
 *  The zone provided to you by our publisher development team.
 *
 *  @discussion The zone must be set in order to serve any advertisments. Set this in your app delegate or as early as you can.
 */
@property (strong, nonatomic) NSString *zoneId;

/*!
 *  Subscribes and builds an adView.
 *
 *  @param adView the adView you would like to build.
 *
 *  @warning you cannot properly build an adView without subscribing it.
 */
- (void)subscribeAdView:(GGAdView *)adView;

/*!
 *  Un-subscribes an adView.
 *
 *  @param adView the adView you want to un-subscribe
 */
- (void)unSubscribeAdView:(GGAdView *)adView;
@end
