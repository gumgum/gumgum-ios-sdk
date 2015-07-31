//
//  GGInSlotManager.h
//  GumGumiOSSDK
//
//  Created by Jake Peterson on 6/18/15.
//  Copyright (c) 2015 GumGum Inc. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import "GGNativeAd.h"
#import "GGAdDelegate.h"

@class GGBuilder;
@class GGAdBadgeButton;

@protocol GGInFeedDataSource <NSObject>

/*!
 *  The tableView you want to display ads in.
 */
- (UITableView *)tableView;

@end

@interface GGInFeedManager : NSObject

/*!
 *  A static instance of GGInFeedManager
 *
 *  @return an instance of GGInFeedManager
 */
+ (instancetype)sharedManager;

/*!
 *  Starts the setup of a new in feed ad.
 *
 *  @param size                   the size of the view that the native ad will be displayed in
 *  @param placementId            the placement ID provided to you by GumGum
 *  @param indexPath              the indexPath you would like to see the ad in your tableView or collectionView.
 *                                If nil, the indexPath of where the ad is placed is chosen for you.
 *  @param dataSource             an instance conforming to GGInFeedDataSource
 *  @param viewControllerDelegate a view controller prepared to handle presentation actions
 */
- (void)getInFeedAdWithSize:(CGSize)size
                placementId:(NSUInteger)placementId
                  indexPath:(NSIndexPath *)indexPath
                 dataSource:(id <GGInFeedDataSource>)dataSource
                   delegate:(UIViewController <GGAdDelegate>*)viewControllerDelegate;

/*!
 *  Returns the number of native ads currently showing inside 
 *  the tableView you placed them in.
 *
 *  @param section the section of the tableView (indexPath.section)
 *
 *  @return an unsigned integer representing the number of native ads
 *          being shown in the provided section
 */
- (NSUInteger)nativeAdCountForSection:(NSUInteger)section;

/*!
 *  Returns the native ad located at the provided indexPath.
 *
 *  @param indexPath the indexPath from the tableView you're displaying ads in
 *  @param cell      an instance of the cell you want to place the native ad in
 *
 *  @return a native ad or nil depending on there being a native ad in that indexPath or not
 */
- (GGNativeAd *)nativeAdAtIndexPath:(NSIndexPath *)indexPath cell:(UITableViewCell *)cell;

/*!
 *  A helper method useful for offseting the array of objects you are displaying in your tableView.
 *
 *  @note use at the very end of organizing your data for display in your tableView
 *
 *  @param indexPath the indexPath from the tableView you're displaying ads in
 *
 *  @return an positive or negative integer meant to offset the array of objects you are displaying
 */
- (NSInteger)offsetForIndexPath:(NSIndexPath *)indexPath;

/*!
 *  Required clean up step for native ads being shown in tableView
 */
- (void)clearNativeAds;

- (void)trackClickForNativeAd:(GGNativeAd *)nativeAd;

@end
