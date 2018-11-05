//
//  StickerManager.swift
//  StickersWpp
//
//  Created by Brendon Willian on 05/11/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

@objc(StickerManager)
class StickerManager: NSObject {
  
  @objc(sendToWhatsApp:)
  func sendToWhatsApp(stickers: [[String: Any]]) -> Void {
    print(stickers)
  }
  
}
