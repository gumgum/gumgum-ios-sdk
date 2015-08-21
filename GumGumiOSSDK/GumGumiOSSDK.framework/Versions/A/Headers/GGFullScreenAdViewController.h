//
//  GGFullScreenAdViewController.h
//  GumGumiOSSDK
//
//  Created by Jake Peterson on 8/19/15.
//  Copyright (c) 2015 GumGum Inc. All rights reserved.
//

#import <UIKit/UIKit.h>

@protocol GGFullScreenAdDelegate <NSObject>

- (void)playbackFinished;

@end

@interface GGFullScreenAdViewController : UIViewController

@property (nonatomic, weak) id <GGFullScreenAdDelegate> delegate;

@end
