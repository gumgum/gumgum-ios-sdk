//
//  GGInSlotManager.h
//  GumGumiOSSDK
//
//  Created by Jake Peterson on 6/18/15.
//  Copyright (c) 2015 GumGum Inc. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import "GGInSlotAd.h"

typedef void (^GGInSlotCompletionBlock)(GGInSlotAd *inSlotAd, NSError *error);

@interface GGInSlotManager : NSOperationQueue

+ (instancetype)sharedManager;

- (void)getInSlotForImageSize:(CGSize)size
               completion:(GGInSlotCompletionBlock)completion;

@end
