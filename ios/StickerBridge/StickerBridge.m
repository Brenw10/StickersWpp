//
//  StickerBridge.m
//  StickersWpp
//
//  Created by Brendon Willian on 01/11/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "StickerBridge.h"
#import <React/RCTLog.h>

@implementation StickerBridge

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(import:(NSArray *)paths)
{
  RCTLogInfo(@"Pretending to create an event %@", paths);
}

@end
