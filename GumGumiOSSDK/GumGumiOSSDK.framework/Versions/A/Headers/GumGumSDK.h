//
//  GumGumSDK.h
//  GumGumiOSSDK
//
//  Created by Jake Peterson on 8/4/15.
//  Copyright (c) 2015 GumGum Inc. All rights reserved.
//

#import <Foundation/Foundation.h>

static NSString * const GumGumSDKErrorDomain = @"GumGumSDKErrorDomain";

@interface GumGumSDK : NSObject
/*!
 *  Will initialize the GumGum iOS SDK. Set this in your app delegate or as early as you can.
 *
 *  @param zoneId The zone provided to you by our publisher development team. The zone must be set in order to serve any advertisments.
 *
 *  @param appStoreURL The url where your app is published in the App Store.
 *
 *  @param isPaid Specifies if your app costs money to download from the App Store. Defaults to NO.
 *
 */
+ (void)initializeWithZoneId:(NSString *)zoneId appStoreURL:(NSURL *)url isPaid:(BOOL)isPaid;

@end
