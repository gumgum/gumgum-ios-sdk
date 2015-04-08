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
+ (GGAdManager *)sharedManager;

/*!
 *  The trackingId must be set in order to serve an advertisement. Set this in your app delegate.
 */
@property (strong, nonatomic) NSString *zoneId;

@property (nonatomic, readonly) WKProcessPool *processPool;

- (void)subscribeAdView:(GGAdView *)adView;
- (void)unSubscribeAdView:(GGAdView *)adView;
@end
