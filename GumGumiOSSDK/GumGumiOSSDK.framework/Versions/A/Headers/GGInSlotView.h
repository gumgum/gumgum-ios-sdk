//
//  InSlotView.h
//  GumGumiOSSDK
//
//  Created by Jake Peterson on 10/12/15.
//  Copyright © 2015 GumGum Inc. All rights reserved.
//

#import "GGAdManager.h"

@interface GGInSlotView : UIView

- (id)initWithFrame:(CGRect)frame
           keywords:(NSString *)keywords
            pageUrl:(NSURL *)pageUrl
             slotId:(NSNumber *)slotId
           delegate:(UIViewController<GGAdDelegate> *)delegate;

@end
