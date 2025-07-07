

import { type NextRequest, NextResponse } from "next/server"

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL || "https://discord.com/api/webhooks/1391385214147629117/8qzTzt7O2fbsiTTZTfi65FreGlDVuAOvIQMwDBoCrX_GgxOLi7QFZK8DU93z99nhdwHY"

export async function POST(request: NextRequest) {
  try {
    const { item, orderData } = await request.json()

    const discordMessage = {
      embeds: [
        {
          title: "🛍️ New LUXE Order Received!",
          color: 0x000000, // Black color
          fields: [
            {
              name: "📦 Product Details",
              value: `**${item.name}**\n💰 $${item.price}\n🏷️ ${item.category}`,
              inline: true,
            },
            {
              name: "👤 Customer Info",
              value: `**${orderData.name}**\n📱 ${orderData.contactNumber}`,
              inline: true,
            },
            {
              name: "👤 Email Address",
              value: `📧 ${orderData.email}`,
              inline: false,
            },
            {
              name: "📏 Order Specifications",
              value: `**Size:** ${orderData.size}${item.selectedColor ? `\n**Color:** ${item.selectedColor}` : ""}`,
              inline: true,
            },
            {
              name: "📍 Delivery Address",
              value: orderData.address,
              inline: false,
            },
            {
              name: "🎵 TikTok ID",
              value: orderData.tiktokId || "Not provided",
              inline: true,
            },
          ],
          image: {
            url: item.image.startsWith("/placeholder")
              ? `https://via.placeholder.com/400x500/f5f5f5/333333?text=${encodeURIComponent(item.name)}`
              : item.image,
          },
          timestamp: new Date().toISOString(),
          footer: {
            text: "LUXE Order Management System",
            icon_url: "https://via.placeholder.com/32x32/000000/ffffff?text=L",
          },
        },
      ],
    }

    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(discordMessage),
    })

    if (!response.ok) {
      throw new Error("Failed to send Discord message")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending order to Discord:", error)
    return NextResponse.json({ error: "Failed to process order" }, { status: 500 })
  }
}

