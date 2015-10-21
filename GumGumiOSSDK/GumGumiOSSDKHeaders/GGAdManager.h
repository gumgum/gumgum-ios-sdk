//
//  GGAdManager.h
//  GumGumiOSSDKExample
//
//  Created by Jake Peterson on 6/4/14.
//  Copyright (c) 2014 GumGum Inc. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "GGAdDelegate.h"

@class GGAdViewController;
@class GGBadge;
@class WKProcessPool;
@class GGBuilder;
@class GGBuilderController;
@class GGIndexPathViewController;

typedef void(^GGObjectResultsBlock)(id responseObject, NSError *error);
typedef void(^GGAdCompletionBlock)(GGBadge *badgeInfo, NSError *error);

@protocol GGAdManagerDelegate <NSObject>

- (void)adViewControllerDidFinishLoading:(GGBuilderController *)viewController;

@end

@interface GGAdManager : NSObject
+ (GGAdManager *)sharedManager;


@property (strong, nonatomic) NSString *zoneId;


@property (nonatomic, strong) NSURL *appStoreUrl;


@property (nonatomic) BOOL isPaid;

/*!
 *  Subscribes and builds the components specified by the builder
 *
 *  @param builder the object representing the type of implementation you desire.
 *
 *  @note you can use the builder object as a state machine.
 */
- (GGBuilderController *)enqueueBuilder:(GGBuilder *)builder
                 viewControllerDelegate:(UIViewController <GGAdDelegate>*)viewControllerDelegate
                        managerDelegate:(id<GGAdManagerDelegate>)delegate;

- (WKProcessPool *)processPool;
- (dispatch_queue_t)operationQueue;

- (void)openURL:(NSURL *)url inViewController:(UIViewController *)viewController;

- (void)requestPermissionToServeZone:(NSString *)zoneId completion:(void(^)(BOOL shouldServe))completion;

@end
