//
//  GGInSlotAd.h
//  GumGumiOSSDK
//
//  Created by Jake Peterson on 6/26/15.
//  Copyright (c) 2015 GumGum Inc. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

@class GGAd;

@interface GGNativeAd : NSObject

- (id)initWithAd:(GGAd *)ad;

@property (nonatomic, strong) NSNumber *objectId;
@property (nonatomic, strong) NSString *title;
@property (nonatomic, strong) NSURL *imageUrl;
@property (nonatomic, strong) NSString *adDescription;
@property (nonatomic, strong) NSString *sponsoredBy;

@property (nonatomic, strong) NSArray *impressionUrls;
@property (nonatomic, strong) NSURL *clickUrl;

@end
