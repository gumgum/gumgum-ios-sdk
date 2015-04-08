//
//  GGInScreenNavigationController.h
//  SDK
//
//  Created by Jake Peterson on 12/12/14.
//  Copyright (c) 2014 GumGum Inc. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "GGAdDelegate.h"

@class GGAdViewController;

@interface GGInScreenNavigationController : UINavigationController <GGAdDelegate>
@property (nonatomic) BOOL inScreenHidden;
- (void)setInScreenHidden:(BOOL)inScreenHidden animated:(BOOL)animated;

@property (strong, nonatomic) NSURL *pageURL;
@property (strong, nonatomic) NSString *keywords;

- (void)reload;
@end

@interface UIViewController (GGInScreenNavigationControllerItem)
@property (nonatomic) BOOL hidesInScreenBarWhenPushed;
@end