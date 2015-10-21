//
//  GGNativeAdManager.h
//  GumGumiOSSDK
//
//  Created by Jake Peterson on 7/8/15.
//  Copyright (c) 2015 GumGum Inc. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import "GGNativeAd.h"
#import "GGAdDelegate.h"

@protocol GGNativeAdDelegate <NSObject>

- (void)didFinishLoadingNativeAd:(GGNativeAd *)nativeAd;

@optional

- (void)nativeAdFailedWithError:(NSError *)error;

@end

typedef void (^GGNativeAdCompletionBlock)(GGNativeAd *ad, NSError *error);

@interface GGNativeAdManager : NSObject

+ (instancetype)sharedManager;

/*!
 *  Creates and returns a native ad for displaying inline
 *  with your existing app UI.
 *
 *  @param size                   the size of the view that the native ad will be displayed in
 *  @param viewControllerDelegate a view controller prepared to handle presentation actions
 *  @param delegate               responsible for returning a native or an error
 */
- (void)getNativeAdForSize:(CGSize)size
               placementId:(NSUInteger)placementId
    viewControllerDelegate:(UIViewController <GGAdDelegate>*)viewControllerDelegate
                  delegate:(id <GGNativeAdDelegate>)delegate;

@end
