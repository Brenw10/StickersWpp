//
//  StickerManagerBridge.m
//  StickersWpp
//
//  Created by Brendon Willian on 05/11/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(StickerManager, NSObject)

RCT_EXTERN_METHOD(sendToWhatsApp:(NSArray *)stickers)

@end
