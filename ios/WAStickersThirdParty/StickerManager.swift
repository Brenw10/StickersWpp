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
  func sendToWhatsApp(stickers: [String]) -> Void {
    var stickerPack: StickerPack?
    do {
      stickerPack = try StickerPack(
        identifier: "StickersWpp",
        name: "StickersWpp",
        publisher: "StickersWpp",
        trayImageFileName: "tray_Cuppy.png",
        publisherWebsite: "www.google.com",
        privacyPolicyWebsite: "www.google.com",
        licenseAgreementWebsite: "www.google.com"
      )
    } catch {
      fatalError(error.localizedDescription)
    }

    for sticker in stickers {
      let stickerData = Data(base64Encoded: sticker, options: .ignoreUnknownCharacters)
      do {
        try stickerPack?.addSticker(imageData: stickerData!, type: ImageDataExtension(rawValue: "png")!, emojis: [])
      } catch {
        fatalError(error.localizedDescription)
      }
    }

    stickerPack!.sendToWhatsApp { completed in
      print("DONE")
    }
  }
  
}
