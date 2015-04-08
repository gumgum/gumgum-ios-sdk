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

@protocol GGAdDelegate <NSObject>
@optional
- (void)didFailWithError:(NSError *)error;
- (void)didFinishLoad:(GGAdView *)adView;
- (void)didClose;
@end