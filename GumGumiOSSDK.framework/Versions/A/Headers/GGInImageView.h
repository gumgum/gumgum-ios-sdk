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

@property (nonatomic, strong) NSURL *imageURL;
@property (nonatomic, strong) NSURL *pageURL;
@property (nonatomic, strong) NSString *keywords;
@property (nonatomic, weak) UIViewController <GGAdDelegate>*delegate;

- (void)load;

@end
