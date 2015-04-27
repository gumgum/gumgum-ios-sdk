//
//  GGAdDelegate.h
//  SDK
//
//  Created by Jake Peterson on 1/24/15.
//  Copyright (c) 2015 GumGum Inc. All rights reserved.
//

#import <UIKit/UIKit.h>

@class GGBadgeInfo;
@class GGAdView;

/*!
 *  A protocol you can use to conform your UIViewController to.
 *
 *  @note GGInScreenViewController will not receive data from your UIViewController unless it conforms to GGAdDelegate
 */
@protocol GGAdDelegate <NSObject>

@optional

/*!
 *  A callback for when an ad failed to load.
 *
 *  @param error the error returned by the ad loading event.
 */
- (void)didFailWithError:(NSError *)error;

/*!
 *  A callback for when an ad has finished loading.
 *
 *  @param adView the adView that contains the ad that was loaded.
 */
- (void)didFinishLoad:(GGAdView *)adView;

/*!
 *  A callback for when an ad was closed by the user.
 */
- (void)didClose;
@end