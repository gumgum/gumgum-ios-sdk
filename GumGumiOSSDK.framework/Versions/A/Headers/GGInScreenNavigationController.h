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

/*!
 *  Will hide/show the ad.
 *
 *  @param inScreenHidden a boolean indicating whether you would like to show or hide the ad.
 *  @param animated       a boolean indicating whether you would like the action to occur immediately or via animation.
 */
- (void)setInScreenHidden:(BOOL)inScreenHidden animated:(BOOL)animated;

/*!
 *  A url describing the page which the ad is being served on.
 */
@property (strong, nonatomic) NSURL *pageURL;

/*!
 *  Words (delimited by commas) that describe the page the ad is being served on.
 */
@property (strong, nonatomic) NSString *keywords;

/*!
 *  Initiates a reload for the current ad being displayed.
 *
 *
 */
- (void)reload;
@end

@interface UIViewController (GGInScreenNavigationControllerItem)
/*!
 *  Will hide/show the ad while pushing a new view controller onto the navigation stack.
 */
@property (nonatomic) BOOL hidesInScreenBarWhenPushed;
@end