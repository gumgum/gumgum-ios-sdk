//
//  GGAdImageView.h
//  GumGumiOSSDK
//
//  Created by Jake Peterson on 8/5/14.
//  Copyright (c) 2014 GumGum Inc. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "GGAdDelegate.h"

@interface GGInImageView : UIImageView

/*!
 *  The url of the image being shown.
 */
@property (nonatomic, strong) NSURL *imageURL;

/*!
 *  The url of the page which the ad is being served on.
 */
@property (nonatomic, strong) NSURL *pageURL;

/*!
 *  A description (delimited by commas) of the image being shown.
 */
@property (nonatomic, strong) NSString *keywords;

/*!
 *  A delegate for receiving callback events from the adView.
 *
 * @see GGAdDelegate
 */
@property (nonatomic, weak) UIViewController <GGAdDelegate>* delegate;

/*!
 *  A boolean for displaying or hiding the in image ad.
 */
@property (nonatomic) BOOL adHidden;

/*!
 *  A helper method for re-using many imageViews inside cells of 
 *  an instance of UITableView
 *
 *  @param indexPath the current indexPath you're placing the imageView in.
 */
- (void)setIndexPath:(NSIndexPath *)indexPath;

@end
